import { Component } from 'react';
import { fetchArticles } from '../services/articles';
import { Clock } from './Clock';
import { Container } from './Container';
import { Example } from './example';
import { ToDoForm } from './ToDoForm';
import { ToDoItem } from './ToDoItem/ToDoItem';
import { Request } from './utils/Request';

const TO_DO_LIST_KEY = 'toDoList';

export class Home extends Component {
  state = {
    isOpen: false,
    title: 'FE-42 the best',
    itemToEdit: null,
    toDoList: [],
    showClock: true,
    articles: [],
  };

  handleSubmit = (formData, resetForm) => {
    const newToDo = {
      ...formData,
    };

    this.setState((prevState) => ({
      toDoList: [...prevState.toDoList, newToDo],
    }));

    resetForm();
  };

  handleDeleteItem = (id) => {
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.filter((item) => item.id !== id),
    }));
  };

  handleEditItem = (id) => {
    this.setState((prevState) => {
      const itemToEdit = prevState.toDoList.find(
        (element) => element.id === id
      );

      return {
        itemToEdit,
      };
    });
  };

  handleUpdateItem = (updatedToDo, resetForm) => {
    this.setState(({ toDoList }) => ({
      itemToEdit: null,
      toDoList: toDoList.map((toDoItem) => {
        if (toDoItem.id === updatedToDo.id) {
          return updatedToDo;
        }

        return toDoItem;
      }),
    }));
    resetForm();
  };

  handleClockToggle = () => {
    this.setState((prevState) => ({
      showClock: !prevState.showClock,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDoList !== this.state.toDoList) {
      localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(this.state.toDoList));
    }
  }

  async componentDidMount() {
    this.setState(() => ({
      toDoList: localStorage.getItem(TO_DO_LIST_KEY)
        ? JSON.parse(localStorage.getItem(TO_DO_LIST_KEY))
        : [],
    }));

    const { data } = await fetchArticles();

    this.setState((prevState) => ({
      articles: [...prevState.articles, ...data.hits],
    }));
  }

  render() {
    const { title, toDoList, itemToEdit, showClock, articles } = this.state;

    return (
      <main className="main">
        <Container>
          <h1>{title}</h1>
          {showClock && <Example />}

          <ul>
            {articles.map((article) => {
              return <li>{article.title}</li>;
            })}
          </ul>
          <Request request={fetchArticles}>
            {({ data, loading, error }) => {
              if (loading) {
                return <div>...Loading</div>;
              }

              if (error) {
                return <div>Error</div>;
              }

              if (data) {
                return <div>Article amount {data.data.nbHits}</div>;
              }
            }}
          </Request>

          <button onClick={this.handleClockToggle}>Toggle clock</button>
          {showClock && <Clock />}

          <ToDoForm
            initialState={itemToEdit}
            onSubmit={this.handleSubmit}
            onUpdate={this.handleUpdateItem}
          />

          {toDoList.map((item) => (
            <ToDoItem
              key={item.title}
              id={item.id}
              title={item.title}
              description={item.description}
              onDelete={this.handleDeleteItem}
              onEdit={this.handleEditItem}
            />
          ))}
        </Container>
      </main>
    );
  }
}

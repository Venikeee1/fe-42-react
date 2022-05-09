import { Component } from 'react';
import { Container } from './Container';
import { ToDoForm } from './ToDoForm';
import { ToDoItem } from './ToDoItem/ToDoItem';

const TO_DO_LIST_KEY = 'toDoList';

export class Home extends Component {
  state = {
    isOpen: false,
    title: 'FE-42 the best',
    itemToEdit: null,
    toDoList: [],
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDoList !== this.state.toDoList) {
      localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(this.state.toDoList));
    }
  }

  componentDidMount() {
    this.setState((prevState) => ({
      toDoList: localStorage.getItem(TO_DO_LIST_KEY)
        ? JSON.parse(localStorage.getItem(TO_DO_LIST_KEY))
        : [],
    }));
  }

  render() {
    const { title, toDoList, itemToEdit } = this.state;

    return (
      <main className="main">
        <Container>
          <h1>{title}</h1>
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

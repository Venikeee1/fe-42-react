import { Component } from 'react';
import { Container } from './Container';
import { ToDoForm } from './ToDoForm';
import styles from './Home.module.css';
import { Button } from './ui/Button';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

const TO_DO_LIST_KEY = 'toDoList';

export class Home extends Component {
  state = {
    title: 'FE-42 the best',
    toDoList: localStorage.getItem(TO_DO_LIST_KEY)
      ? JSON.parse(localStorage.getItem(TO_DO_LIST_KEY))
      : [],
  };

  handleSubmit = (formData, resetForm) => {
    this.setState((prevState) => ({
      toDoList: [...prevState.toDoList, formData],
    }));
    localStorage.setItem(
      TO_DO_LIST_KEY,
      JSON.stringify([...this.state.toDoList, formData])
    );
    resetForm();
  };

  handleDeleteItem = (title) => {
    this.setState(
      (prevState) => ({
        toDoList: prevState.toDoList.filter((item) => item.title !== title),
      }),
      () => {
        localStorage.setItem(
          TO_DO_LIST_KEY,
          JSON.stringify(this.state.toDoList)
        );
      }
    );
  };

  render() {
    const { title, toDoList } = this.state;

    return (
      <main className="main">
        <Container>
          <h1>{title}</h1>
          <ToDoForm onSubmit={this.handleSubmit} />

          {toDoList.map((item) => (
            <div className={styles.toDoItem} key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Button
                onClick={() => this.handleDeleteItem(item.title)}
                color="alert"
              >
                Delete
              </Button>
            </div>
          ))}
        </Container>
      </main>
    );
  }
}

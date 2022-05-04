import { Component } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import PropTypes from 'prop-types';
import styles from './ToDoForm.module.css';
import { Textarea } from '../ui/Textarea/Textarea';

const INITIAL_STATE = {
  title: '',
  description: '',
  toDoFirst: false,
};

export class ToDoForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  // handleInputChange = (name) => (event) => {
  //   const { target } = event;

  //   this.setState(() => ({
  //     [name]: target.value,
  //   }));
  // };

  //Розгорнутий запис handleInputChange
  handleInputChange = (name) => {
    return (event) => {
      const { target } = event;

      this.setState(() => ({
        [name]: target.value,
      }));
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;

    onSubmit && onSubmit(this.state, this.resetForm);
    // аналог запису вище
    // onSubmit?.(this.sate)
  };

  resetForm = () => {
    this.setState(() => ({
      ...INITIAL_STATE,
    }));
  };

  example = () => {
    // приклад використання замикання
    const handleTitleChange = this.handleInputChange('title');
    // const handleTitleChange = (event) => {
    //   const { target } = event;

    //   this.setState(() => ({
    //     title: target.value,
    //   }));
    // };

    handleTitleChange({
      target: {
        value: 11111,
      },
    });
  };

  // handleTitleCHange = (event) => {
  //   const { target } = event;

  //   this.setState(() => ({
  //     title: target.value,
  //   }));
  // };

  // handleDescriptionChange = (event) => {
  //   const { target } = event;

  //   this.setState(() => ({
  //     description: target.value,
  //   }));
  // };

  // handleToDoFirstChange = (event) => {
  //   const { target } = event;

  //   this.setState(() => ({
  //     toDoFirst: target.checked,
  //   }));
  // };

  render() {
    const { title, description, toDoFirst } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="title">
            Title
          </label>
          <Input
            onChange={this.handleInputChange('title')}
            value={title}
            id="title"
            name="title"
            type="text"
          />
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <Textarea
            id="description"
            value={description}
            name="description"
            rows="10"
            onChange={this.handleInputChange('description')}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="toDoFirst">
            To do first
          </label>
          <input
            checked={toDoFirst}
            id="toDoFirst"
            name="toDoFirst"
            type="checkbox"
            onChange={this.handleInputChange('toDoFirst')}
          />
        </div>
        <Button>Submit</Button>
      </form>
    );
  }
}

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};

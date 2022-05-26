import { Component } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import PropTypes from 'prop-types';
import styles from './ToDoForm.module.css';
import { Textarea } from '../ui/Textarea/Textarea';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  __id__: '',
  title: '',
  description: '',
  toDoFirst: false,
};

export class ToDoForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.initialState) {
      return prevState;
    }

    if (nextProps.initialState.id !== prevState.__id__) {
      const { id, ...restProps } = nextProps.initialState;

      return {
        __id__: id,
        ...restProps,
      };
    }

    return prevState;
  }

  handleInputChange = (name) => {
    return (event) => {
      const { target } = event;

      this.setState(() => ({
        [name]: target.value,
      }));
    };
  };

  createItem = () => {
    const { onSubmit } = this.props;
    const formData = {
      id: nanoid(),
      title: this.state.title,
      description: this.state.description,
      toDoFirst: this.state.toDoFirst,
    };

    onSubmit && onSubmit(formData, this.resetForm);
  };

  updateItem = () => {
    const { onUpdate, initialState } = this.props;

    const formData = {
      id: initialState.id,
      title: this.state.title,
      description: this.state.description,
      toDoFirst: this.state.toDoFirst,
    };

    onUpdate && onUpdate(formData, this.resetForm);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { initialState } = this.props;

    initialState ? this.updateItem() : this.createItem();
  };

  resetForm = () => {
    this.setState(() => ({
      ...INITIAL_STATE,
    }));
  };

  shouldComponentUpdate(props, state) {
    if (state.title === 'say') {
      return false;
    }

    return true;
  }

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
        {this.props.initialState ? (
          <>
            <Button type="button" color="plain">
              Cancel
            </Button>
            <Button>Update</Button>
          </>
        ) : (
          <Button>Create</Button>
        )}
      </form>
    );
  }
}

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
  onUpdate: PropTypes.func,
  initialState: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    toDoFirst: PropTypes.bool,
  }),
};

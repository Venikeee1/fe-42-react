import { Button } from '../ui/Button';
import PropTypes from 'prop-types';
import styles from './ToDoItem.module.css';

export const ToDoItem = ({ title, description, onDelete, id, onEdit }) => {
  return (
    <div className={styles.toDoItem}>
      <h2>{title}</h2>
      <p>{description}</p>

      <Button onClick={() => onEdit(id)}>Edit</Button>
      <Button onClick={() => onDelete(id)} color="alert">
        Delete
      </Button>
    </div>
  );
};

ToDoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

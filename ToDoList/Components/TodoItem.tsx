import React from 'react';
import '../Styles/TodoItem.css';


interface TodoItemProps {
  task: string;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

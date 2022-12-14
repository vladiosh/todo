import React from 'react';
import { List } from './TodoList.styled';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <List>
      {todos.map(({ description, id }) => (
        <TodoItem
          key={id}
          id={id}
          description={description}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteTodo: PropTypes.func.isRequired,
};

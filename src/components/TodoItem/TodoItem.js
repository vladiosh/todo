import React from 'react';
import { Btn, Item, Text } from './TodoItem.styled';
import PropTypes from 'prop-types';

const TodoItem = ({ id, description, onDeleteTodo }) => {
  return (
    <Item>
      <Text>{description}</Text>
      <Btn onClick={() => onDeleteTodo(id)}>Delete</Btn>
    </Item>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

import React from 'react';
import { Btn, TodoItem, Text, List } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <List>
      {todos.map(({ description, id }) => (
        <TodoItem key={id}>
          <Text>{description}</Text>
          <Btn onClick={() => onDeleteTodo(id)}>Delete</Btn>
        </TodoItem>
      ))}
    </List>
  );
};

export default TodoList;

import React from 'react';
import { Component } from 'react';
import { Container, ListCounter, TextCounter } from './App.styled';
import TodoList from '../TodoList/TodoList';
import initialTodos from '../../todos';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodo = todos.length;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <Container>
        <ListCounter>
          <TextCounter>Total: {totalTodo}</TextCounter>
          <TextCounter>Done: {completedTodos}</TextCounter>
        </ListCounter>
        {todos.length > 0 && (
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        )}
      </Container>
    );
  }
}

export default App;

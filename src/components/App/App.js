import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';
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
        <div>
          <p>Total: {totalTodo}</p>
          <p>Done: {completedTodos}</p>
        </div>
        {todos.length > 0 && (
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        )}
      </Container>
    );
  }
}

export default App;

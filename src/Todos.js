import React, { Component } from 'react';
import Child from './Child'


class Todos extends Component {
  toggle = (id) => {
    console.log('you clicked a box!', id)
    this.props.dispatch({ type: "TOGGLE_TODO", payload: id})
  }

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <p key={todo.id}>{todo.name}<input onChange={()=>this.toggle(todo.id)} type="checkbox" /></p>
        ))}
      </div>
    );
  }
}

export default Todos;
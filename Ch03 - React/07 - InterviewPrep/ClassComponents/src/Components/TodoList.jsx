import React, { Component } from 'react'

export default class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            currTodo: ""
        }
        console.log("Constructor ::: Setting up initial state and bindings");
    }

  render() {
    console.log("render method is called");
    return (
      <div>
        <h1>My Todo List</h1>
        <input type='text' value={this.state.currTodo} onChange={handleInput}/>
        <button onClick={this.handleAddTodo}>Add To-Do</button>
        <ul>
            {this.state.todos.map((todo, index) => {
                <li key={index}>{todo}</li>
            })}
        </ul>
      </div>
    )
  }
}

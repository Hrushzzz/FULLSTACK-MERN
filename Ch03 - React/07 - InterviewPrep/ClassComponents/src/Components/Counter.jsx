import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super(); // this calls the constructor of the Parent class

    //creating a "state" in Class Component
    this.state = {
      count: 0,
      name: "",
      list: [],
    };
  }

  //In Class based components, functions should always have to be arrow functions
  // or we can always use bind to point this
  handleIncrement = () => {
    console.log("hello", this);
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
        // count: this.state.count - 1
        count: prevState.count > 0 ? prevState.count - 1 : 0
    }));
  }

  render() {
    // this "render" method is used to render our UI
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

// constructor --> is called automatically as soon as a class is intantiated.

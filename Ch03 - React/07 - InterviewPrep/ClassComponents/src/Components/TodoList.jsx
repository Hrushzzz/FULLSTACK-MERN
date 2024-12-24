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

  // // **** LIFE CYCLE METHODS OF CLASS BASED COMPONENETS ****//

  // // Similar thing can be written using useEffect as ::

  // // useEffect(() => {}, []);  ====> this is called once when components is mounted
  componentDidMount() {
    console.log("Component Did Mount ::: Fetching initial Todo items");
    // simulate fetching data from an API
    setTimeout(() => {
      this.setState({
        todos: ["Play Cricket", "Play Football"]
      });
    }, 1000);
  }


  // useEffect(()=>{},[todos]);  ====>   this is called only when state is updated
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update ::: Checking if new to-do was added");
    if (prevState.todos !== this.state.todos) {
      console.log("Updated To-dos:", this.state.todos);
    }
  }


  // // useEffect(()=>{});
  // shouldComponentUpdate() {
  //   console.log("I am called before a state is updated");
  // }


  // // useEffect(()=>{
  // //     //do something
  // //     return () => {}
  // // });                     ====>  this is called before the next component is mounted
  // componentWillUnmount() {
  //   console.log("Component will Unmount ::: Cleaning up the resources");
  // }

  // // **** END OF CLASS BASED LIFE CYCLE COMPONENTS ****

  handleInput = (e) => {
    this.setState({ currTodo: e.target.value })
  }

  handleAddTodo = () => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, this.state.currTodo],
      currTodo: ""
    }))
  }

  render() {
    console.log("render method is called");
    return (
      <div>
        <h1>My Todo List</h1>
        <input type="text" value={this.state.currTodo} onChange={this.handleInput} />
        <button onClick={this.handleAddTodo}>Add To-Do</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}

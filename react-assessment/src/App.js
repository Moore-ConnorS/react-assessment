import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      todos: ['Take out the trash', 'Sweep the floor']
    }

    this.handleChange = this.handleChange.bind( this )
    this.add = this.add.bind( this )
    this.delete = this.delete.bind( this )
  }

  handleChange( e ) {
    this.setState({
      input: e.target.value
    })
  }

  add(){
    this.setState((prevState) => {
      return(
        {
          todos: [ prevState.input, ...prevState.todos ],
          input: ''
        }
      )
    })
  }

  delete( i ){
    const newTodos = this.state.todos.slice()
    newTodos.splice(i, 1)
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="App container">
        <div className="inputContainer">
        <input type="text" value={ this.state.input } onChange={ this.handleChange }/>
        <button onClick={ this.add } disabled={!this.state.input}>Add Todo</button>
        </div>
        <div className="listContainer">
        {this.state.todos.map((todo, i) => {
          return (
            <Todo title={todo} id={i} key={todo} delete={this.delete} />
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Todo.css'


export default class Todo extends Component {
    constructor(){
        super()
        this.state = {
            color: 'beige',
            opacity: 1,
            disabled: false
        }

        this.handleComplete = this.handleComplete.bind( this )
    }

    handleComplete(){
        this.setState({
            color:'green',
            opacity: 0.4,
            disabled: true
        })
    }
    
    render(){
        return(
            <div className="item" style={{backgroundColor: this.state.color, opacity: this.state.opacity}}>
                <h3>{this.props.title}</h3>
                <button onClick={ this.handleComplete } disabled={this.state.disabled}>Complete</button>
                <button onClick={() => this.props.delete(this.props.id)}>X</button>

            </div>
        )
    }
}
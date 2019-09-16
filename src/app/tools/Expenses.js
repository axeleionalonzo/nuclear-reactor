import React, { Component } from 'react'
import Lists from './Lists'

class Expenses extends Component {
  state = {
    lists: [
      { id: 1, name: 'bfast', cost: 100 },
      { id: 2, name: 'lunch', cost: 79 }
    ]
  }
  deleteExpense = (id) => {
    const lists = this.state.lists.filter(list => {
      return list.id !== id; // if false: removes/filters the element from the array
    })
    this.setState({lists})
  }
  render() {
    return (
      <div className="container">
        <h2>Expenses</h2> 
        <Lists lists={this.state.lists} deleteExpense={this.deleteExpense}/>
      </div>
    )
  }
}

export default Expenses
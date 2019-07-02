import React, { Component } from 'react'
class Title extends Component {
  render() {
    const title = 'Achievement hub'
    
    return (
      <div className="jumbotron text-center">
        <h1 className="header-title">{title}</h1>
        <p></p>
      </div>
    )
  }
}

export default Title
import React, { Component } from 'react'
import './display.css'

class Display extends React.Component {
  render() {
    return (
      <div className='display-container'>
        <span className='name'>{this.props.title.slice(0, this.props.title.lastIndexOf('A'))}</span> <span className='display-data'>{this.props.rating}</span>
      </div>
    )
  }
}

export default Display

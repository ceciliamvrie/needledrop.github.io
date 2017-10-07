import React, { Component } from 'react'
import './display.css'

class Display extends React.Component {
  render() {
    return (
      <div className='display-container'>
        <span className='name'>Name</span> <span className='display-data'>Data</span>
      </div>
    )
  }
}

export default Display

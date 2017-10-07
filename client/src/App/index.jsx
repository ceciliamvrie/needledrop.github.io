import React, { Component } from 'react'
import './app.css'
import Board from '../ReviewBoard/index.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{'position': 'fixed'}}>Dropped Reviews</h1>
        <div style={{'position': 'absolute', 'top': '0'}}>
         <Board/>
        </div>
      </div>
    )
  }
}

export default App

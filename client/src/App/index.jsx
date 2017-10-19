import React, { Component } from 'react'
import './app.css'
import Board from '../ReviewBoard/index.jsx'
import Data from '../models/data'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      covers: [],
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h1 style={{'position': 'fixed'}}>Dropped Reviews</h1>
        <div style={{'position': 'absolute', 'top': '0'}}>
         <Board />
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import './app.css'
import Board from '../ReviewBoard/index.jsx'
import Data from '../models/data'
import albums from '../models/albums'
import { findToken, findCovers } from '../models/utils'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: albums,
      images: []
    }
  }
  async componentDidMount() {
    this.setStateAsync({
      images: await this.state.albums.map(async (album) => {
          await findCovers(album[0], album[1], await findToken())
        })
    })
  }
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

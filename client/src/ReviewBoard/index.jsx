import React, { Component } from 'react'
import Data from '../models/data'
import './styles.css'
import Card from '../ReviewCard/index.jsx'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 3,
      cards: [...Data]
    }
  }
  componentDidMount (){
    this.setState({
      cards: this.state.cards.reduce((acc, cur, i) => {
        if(!(i % this.state.size)) {
          acc.push(this.state.cards.slice(i, i + this.state.size))
        }
        return acc
      }, [])
    })
  }
  render() {
    return (
      <table>
        <tbody className="cards-container">
          {
            this.state.cards.map((row, i) => <tr key={i}>{ [...row].map(c => <td><Card data={c}/></td>)}</tr>)
          }
        </tbody>
      </table>
    )
  }
}

export default Board

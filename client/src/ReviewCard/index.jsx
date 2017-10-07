import './card.css'
import React, { Component } from 'react'
import Display from '../Display/index.jsx'

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <div className="browser">
            <div className="container">
            <div className="browser-dots"></div>
            <div className="browser-dots"></div>
            <div className="browser-dots"></div>
          </div>
         </div>
       </div>
      {/*  name and date/views/rating go here  */}
      <Display />
    </div>
    )
  }
}

export default Card

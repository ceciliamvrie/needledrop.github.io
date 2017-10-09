import './card.css'
import React, { Component } from 'react'
import Display from '../Display/index.jsx'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovering: false
    }
  }
  showPopup(e) {
    this.setState({
      isHovering: !this.state.isHovering
    })
  }
  render() {
    return (
      <div className="card-container">
        <div className="card" onMouseEnter={this.showPopup.bind(this)} onMouseLeave={this.showPopup.bind(this)}>
          <div className="browser">
            <div className="container">
            <div className="browser-dots"></div>
            <div className="browser-dots"></div>
            <div className="browser-dots"></div>
          </div>
         </div>
          {
            !this.state.isHovering && <div className="overlay"><div className="circle"><p className="youtube">{this.props.data.rating}</p></div></div>
          }
       </div>
      {/*  name and date/views/rating go here  */}
      <Display title={this.props.data.title} rating={this.props.data.rating}/>
    </div>
    )
  }
}

export default Card

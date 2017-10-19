import './card.css'
import React, { Component } from 'react'
import Display from '../Display/index.jsx'
import axios from 'axios'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovering: false,
      image: ''
    }
  }
  componentDidMount() {
    console.log('IMAGE', this.props)
    this.setState({
      image: this.props.image,
      isClicked: false
    })
  }
  async onClicked(e) {
    const artist = this.props.data.title.split('').slice(0, this.props.data.title.indexOf('-')).join('')
    var album = this.props.data.title.slice(this.props.data.title.indexOf('- ')+2, this.props.data.title.lastIndexOf('A'))
    if (album.includes('DOUBLE')) {
      album = album.slice(0, album.lastIndexOf('D'))
    }
    const image = (await axios(`/api/spotify/album-cover?artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}`)).data
    console.log('image', image)
    this.setState({
      uri: image.items[0].uri,
      isClicked: true,
    })
    console.log(this.state.uri)
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
            this.state.isClicked ? <div style={{'background': '#282828', "height": '127px', 'paddingTop': '40px'}}><iframe style={{'border': 'none', 'height': '200px'}} src={"https://open.spotify.com/embed?uri=" + this.state.uri} width="285" height="150px" frameborder="0" allowtransparency="true"></iframe></div> : !this.state.isHovering ? <div style={{'backgroundImage': `url(${this.props.data.thumbnailUrl}g)`, 'backgroundSize': '300px auto', 'backgroundPosition': 'center'}}className="overlay"><div className="circle"><p className="youtube">{this.props.data.rating}</p></div></div> : <div className="overlay"><button className="play-album" onClick={this.onClicked.bind(this)}><span id="play-button">▷</span>Play Album</button><button className="watch-review">Watch Review</button></div>
          }
       </div>
      {/*  name and date/views/rating go here  */}
      <Display title={this.props.data.title.includes('DOUBLE') ? this.props.data.title.slice(0, this.props.data.title.lastIndexOf('D')) : this.props.data.title} rating={this.props.data.rating}/>
    </div>
    )
  }
}

export default Card

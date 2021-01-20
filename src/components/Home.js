import React from 'react'
import '../scss/homeStyles.scss'
import ReactPlayer from "react-player"
import { Link } from "react-router-dom"
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: "",
      url: ""
    }
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ url: this.state.inputValue })
    axios.post('/api/add', { link: this.state.inputValue })
  }

  render() {
    return (
      <div className="Home">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input className="urlInputControl" onChange={this.handleChange} type="text" placeholder="PASTE VIDEO URL" />
            <button className="watchButton">WATCH</button>
          </form>
        </div>
        <div className="embedVid">
          <ReactPlayer
            url={this.state.url} controls={true}
          />
        </div>
      </div>
    );
  }
}

export default Home;
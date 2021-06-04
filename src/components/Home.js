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
      <div className="home">
        <div className="form-format">
          <form onSubmit={this.handleSubmit}>
            <input className="url-input" onChange={this.handleChange} type="text" placeholder="PASTE VIDEO URL" />
            <button className="watch-button">WATCH</button>
          </form>
        </div>
        <div className="embedded-video">
          <ReactPlayer className="embedded-video-formatter" url={this.state.url} controls={true} />
          <div className="opacity-video-holder"></div>
        </div>
        <div className="footer">
          <div className="user-formatter"></div>
          <h1 className="cc">©PiaoAltoVieu 2021</h1>
        </div>
      </div>
    );
  }
}

export default Home;
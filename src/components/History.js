import React from 'react'
import '../scss/historyStyle.scss'
import { Link } from "react-router-dom"
import axios from 'axios'

class History extends React.Component {
  constructor() {
    super()
    this.state = {
      historyLinks: []
    }
  }

  componentDidMount() {
    axios.get('/api/get').then(res => {
      this.setState({ historyLinks: res.data })
    })
  }

  handleLinkDelete() {
    axios.delete('/api/remove').then(res => {
      this.setState({})
    })
  }

  render() {
    return (
      <div>
        <div className="history-formatter">
          <h2 className="title-history">HISTORY</h2>
        </div>
        <div>
          <p>{this.state.historyLinks.map(element => <p>{element.link}</p>)}</p>
        </div>
        {/* <button>REMOVE</button> */}
        <div className="footer">
          <div className="user-formatter"></div>
          <h1 className="cc">©PiaoAltoVieu 2021</h1>
        </div>
      </div>
    )
  }
}

export default History;
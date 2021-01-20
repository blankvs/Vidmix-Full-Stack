import React, { Component } from 'react'
import axios from 'axios'
import '../scss/loginStyles.scss'
import { connect } from 'react-redux'
import { loginUser } from '../Redux/userReducer'
import { Link , Redirect } from "react-router-dom"



class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  onType = (e) => {
    console.log(e)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin = () => {
    axios.post('/auth/login', { email: this.state.email, password: this.state.password }).then((res) => {
      console.log(res.data)
      this.props.loginUser(res.data)
      this.props.history.push("/Home")
    }).catch(() => alert("Login failed"))
  };

  render() {

    if(this.props.isLoggedIn){
      return <Redirect to = "/Home"/> 
    }

    return (
      <div>
        <div className="loginInputs">
          <h1 className="h1Email">EMAIL</h1>
          <input className="emailInput" value={this.state.email} name="email" type="text" onChange={(e) => this.onType(e)} />
          <h1 className="h1Password">PASSWORD</h1>
          <input className="passwordInput" value={this.state.password} name="password" type="text" onChange={(e) => this.onType(e)} />
          <ul>
            <li><Link className="registerSwitch" to="/Register">REGISTER?</Link></li>
          </ul>
          <button className="loginButton" onClick={() => this.handleLogin()}>LOGIN</button>

        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, { loginUser })(Login);

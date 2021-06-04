import React, { Component } from 'react'
import axios from 'axios'
import '../scss/loginStyles.scss'
import { connect } from 'react-redux'
import { loginUser } from '../Redux/userReducer'
import { Link, Redirect } from "react-router-dom"



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

    if (this.props.isLoggedIn) {
      return <Redirect to="/Home" />
    }

    return (
        <div className="background-box">
          
            <h1 className="email-input-title">EMAIL</h1>
            <input className="email-input" value={this.state.email} name="email" type="text" onChange={(e) => this.onType(e)} />
            <h1 className="password-input-title">PASSWORD</h1>
            <input className="password-input" value={this.state.password} name="password" type="text" onChange={(e) => this.onType(e)} />
           

          <div className="bottom-button-formatter">
            <Link className="register-switch" to="/Register">REGISTER?</Link>
            <button className="login-button" onClick={() => this.handleLogin()}>LOGIN</button>
          </div>

        </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, { loginUser })(Login);

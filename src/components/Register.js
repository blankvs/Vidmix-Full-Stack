import React, { Component } from 'react'
import axios from 'axios'
import '../scss/loginStyles.scss'
import { connect } from 'react-redux'
import { loginUser } from '../Redux/userReducer'
import { Link, Redirect } from "react-router-dom"


class Register extends Component {
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

    handleRegister = () => {
        axios.post('/auth/register', this.state).then((res) => {
            console.log(res.data)
            this.props.loginUser(res.data)
            this.props.history.push("/Home")
        }).catch(() => alert("Register failed"))
    }


    render() {

        if (this.props.isLoggedIn) {
            return <Redirect to="/Home" />
        }

        return (
            <div>
                <div className="background-box">
                    <h1 className="email-input-title">EMAIL</h1>
                    <input className="email-input" value={this.state.email} name="email" type="text" onChange={(e) => this.onType(e)} />
                    <h1 className="password-input-title">PASSWORD</h1>
                    <input className="password-input" value={this.state.password} name="password" type="text" onChange={(e) => this.onType(e)} />

                    <div className="bottom-button-formatter">
                        <Link className="register-switch" to="/">LOGIN?</Link>
                        <button className="login-button" onClick={() => this.handleRegister()}>CREATE ACCOUNT</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { loginUser })(Register);

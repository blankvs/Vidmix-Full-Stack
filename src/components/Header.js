import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout, loginUser } from '../Redux/userReducer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


class Header extends Component {

    componentDidMount(){
        axios.get('/auth').then( res => {
            if (res.data.id){
                this.props.loginUser(res.data)
            }
        })
    }

    logoutUser = () => {
        axios.delete('/auth/logout').then(() => {
            this.props.logout()
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <header>
                <div className="loginHeaderHome">
                    <h1 className="logo-home">VIDVIEU</h1>
                </div>
                <div className="navBar">
                    {
                        !this.props.isLoggedIn ? null : (
                            <ul className="nav_links">

                                <li><Link className="linkHome" to="/Home">HOME</Link></li>
                                <li><Link className="linkHistory" to="/History">HISTORY</Link></li>
                                <li className="logoutButton" onClick={this.logoutUser}>
                                    LOGOUT
                        </li>

                            </ul>
                        )
                    }
                </div>
            </header>
        )
    }
}

const mapStateToProps = redux => {
    return redux
}

export default connect(mapStateToProps, { logout, loginUser })(withRouter(Header))

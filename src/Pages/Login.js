import React, { Component } from 'react'
import '../styles/LoginRegistration.css'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
            resMessage: '',
        }

        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    hasSpecialChars(str) {
        var regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
        return regex(str)
    }

    handleSubmit(event) {
        event.preventDefault()
       
    }


    render() {
        return (
            <main>
                <div className="form-container">
                    <h2 className="form-title">Member Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label className="inline-block" htmlFor="username">Username</label>
                            <span className="form-error">{this.state.usernameError}</span>
                            <input className="form-input block" type="text" name="username" id="username" 
                                value={this.state.username} onChange={this.handleUsernameChange}/>
                        </div>
                        <div>
                            <label className="block" htmlFor="password" >Password</label>
                            <span className="form-error">{this.state.passwordError}</span>
                            <input className="form-input block" type="password" name="password" id="password" 
                                value={this.state.password} onChange={this.handlePasswordChange}/>
                        </div>
                        <div>
                            <input className="form-input form-submit" type="submit" value="Login"/>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

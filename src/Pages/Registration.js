import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordErrors: '',
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

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.passwordErrors)
        if(this.state.password.length < 8 && !this.state.passwordErrors.includes('Password needs to be 8 or more characters')) {
            this.setState({
                passwordErrors: [...this.state.passwordErrors, 'Password needs to be 8 or more characters']
               
            })
        } 
        console.log(this.state.passwordErrors)
        if(!this.hasNumbers(this.state.password) && !this.state.passwordErrors.includes('Password needs to contain atleast one number')) {
            this.setState({
                passwordErrors: [...this.state.passwordErrors, 'Password needs to contain atleast one number']
               
            })
        }
        console.log(this.state.passwordErrors)
    }

    hasNumbers(str) {
        var regex = /\d/g
        return regex.test(str)
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
                            <span className="form-error">
                                {
                                    this.state.passwordErrors.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })

                                }
                            </span>
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

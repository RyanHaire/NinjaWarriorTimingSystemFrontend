import React, { Component } from 'react'
import '../styles/LoginRegistration.css'
import axios from 'axios';

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            email: '',
            usernameError: '',
            passwordErrors: [],
            confirmPasswordError: '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            generalError: '',
            showError: false,
            resMessage: '',
        }

        
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleConfirmPasswordChange(event) {
        this.setState({confirmPassword: event.target.value})
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value})
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        if(this.state.username == '' || this.state.password == '' || this.state.confirmPassword == '' 
        || this.state.firstName == '' || this.state.lastName == '' || this.state.email == ''){
            this.setState({
                showError: true,
                generalError: 'no fields can be empty'
            })
        }
        // check if password length is greater than 8
        // and check if the error message is already shown
        if(this.state.password.length < 8 && !this.state.passwordErrors.includes('Password needs to be 8 or more characters') && this.state.password != '') {
            this.setState({
                passwordErrors: [...this.state.passwordErrors, 'Password needs to be 8 or more characters']
               
            })
        }

        // check if password doesnt have a number 
        // and check if error message is already shown
        if(!this.hasNumbers(this.state.password) && !this.state.passwordErrors.includes('password needs to contain atleast one number') && this.state.password != '') {
            this.setState({
                passwordErrors: [...this.state.passwordErrors, 'password needs to contain atleast one number']
               
            })
        }

        if(this.state.password != this.state.confirmPassword) {
            this.setState({
                confirmPasswordError: 'it is not the same password'
            })
        }

        // check if email is not in email format
        // set error message to be shown
        if(!this.isEmail(this.state.email)  && this.state.email != '') {
            this.setState({
                emailError: 'please enter a valid email'
            })
        }

        // check if username contains special characters
        // set error message
        if(this.hasSpecialChars(this.state.username)) {
            this.setState({
                usernameError: 'username cannot contain special characters'
            })
        }

        // check if firstName contains special characters
        // set error message
        if(this.hasSpecialChars(this.state.firstName) || this.hasNumbers(this.state.firstName)) {
            this.setState({
                firstNameError: 'first name cannot contain special characters or numbers'
            })
        }

        // check if lastName contains special characters
        // set error message
        if(this.hasSpecialChars(this.state.lastName) || this.hasNumbers(this.state.lastName)) {
            this.setState({
                lastNameError: 'last name cannot contain special characters or numbers'
            })
        }

        axios.post('http://localhost:5000', {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            email: this.state.email
        })
        .then((res) => {
            this.setState({
                resMessage: res
            })
        })
        .catch((err) => {
            this.setState({
                resMessage: err
            })
        })
    }

    hasNumbers(str) {
        var regex = /\d/g
        return regex.test(str)
    }

    hasSpecialChars(str) {
        var regex = /!@#$%^&*(),.?":{}|<>/g
        return regex.test(str)
    }

    isEmail(str) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(str)
    }


    render() {
        return (
           <main>
                <div className="form-container">
                    <h2 className="form-title">Member Sign Up</h2>
                    <div className={this.state.showError == false ? 'hide' : 'show'}>
                        <span><i class="fas fa-exclamation-circle"></i></span>
                        <span className="general-error">{this.state.generalError}</span>
                    </div>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label className="inline-block" htmlFor="username">Username</label>
                            <span className="form-error">
                                {this.state.usernameError != '' ? <li>{this.state.usernameError}</li> : null}
                            </span>
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
                            <label className="block" htmlFor="confirmPassword" >Confirm Password</label>
                            <span className="form-error">
                                {this.state.confirmPasswordError != '' ? <li>{this.state.confirmPasswordError}</li> : null}
                            </span>
                            <input className="form-input block" type="password" name="confirmPassword" id="confirmPassword" 
                                value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
                        </div>
                        <div>
                            <label className="inline-block" htmlFor="firstName">First Name</label>
                            <span className="form-error">
                                {this.state.firstNameError != '' ? <li>{this.state.firstNameError}</li> : null}
                            </span>
                            <input className="form-input block" type="text" name="firstName" id="firstName" 
                                value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                        </div>
                        <div>
                            <label className="inline-block" htmlFor="lastName">Last Name</label>
                            <span className="form-error">
                                {this.state.lastNameError != '' ? <li>{this.state.lastNameError}</li> : null}
                            </span>
                            <input className="form-input block" type="text" name="lastName" id="lastName" 
                                value={this.state.lastName} onChange={this.handleLastNameChange}/>
                        </div>
                        <div>
                            <label className="inline-block" htmlFor="email">Email</label>
                            <span className="form-error">
                                {this.state.emailError != '' ? <li>{this.state.emailError}</li> : null}
                            </span>
                            <input className="form-input block" type="text" name="email" id="email" 
                                value={this.state.email} onChange={this.handleEmailChange}/>
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

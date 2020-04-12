import React, { Component } from 'react'
import '../styles/User.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import TimeTable from '../Components/TimeTable'

export default class User extends Component {

    state = {   
        userExists: false,
        speedWalls: [],
        username: "",
        wallId: null,
        error: null
    }
    
    componentDidMount() {
        let component = this;
        let username = this.props.match.params.username;

        // http request to get the user to see if it exists
        //axios.get(`http://142.55.32.86:50171/api/speedwalls`)
        axios.get(`http://localhost:5000/api/users/username/${username}`)
        .then(function(response) {
            // set state and run a callback that will get the speed walls
            component.setState({
                userExists: true,
                username: username
            }, () => {
                // http request to get the speed walls 
                //axios.get(`http://142.55.32.86:50171/api/speedwalls`)
                axios.get('http://localhost:5000/api/speedwalls')
                .then(function(response) {
                    component.setState({
                        speedWalls: response.data,
                    })
                    
                })
                .catch(function(error) {
                    // handle the error when cant get the speedwalls
                    console.log(error)
                })
            })
            
        })
        .catch(function(error) {
            console.log(error)
            component.setState({
                error: "User does not exist."
            })
        })
    }

    // speed wall button click
    handleClick(e) {
        console.log(e.target.value)
        this.setState({
            wallId: e.target.value
        }, () => {
            console.log(this.state.wallId)
        })
    }
    
    render() {
        if(this.state.userExists) {
            return (
                <main className="user-times-container">
                    <div className="user-btn-container">
                        <p>Pick a speed wall to see the times for {this.state.username}</p>
                        <div className="speedwalls-btn-container">
                            {
                                this.state.speedWalls.map(c => {
                                    return <button key={c.id} className="speedwall-btn" value={c.id} 
                                                    onClick={this.handleClick.bind(this)}>{c.name}</button>
                                })
                            }
                        </div>
                    </div>
                    {this.state.wallId != null && <TimeTable id={this.state.wallId} username={this.state.username}/>}
                    {this.state.error != null && <p>{this.state.error}</p>}
                </main>
            )
        } else {
            return (
                <main>
                    <div className="user-btn-container">
                        <p>{this.state.error}</p>
                        <Link to={{pathname: `/`}}>Search for a user</Link>
                    </div>
                </main>
            )
        }
    }
}

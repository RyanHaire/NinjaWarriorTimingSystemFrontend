import React, { Component } from 'react'
import '../styles/Global.css'
import Card from '../Components/Card';
import axios from 'axios';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            speedWalls: []
        }   
    }
    
    componentDidMount() {
        let currentComponent = this;
        axios.get('https://localhost:5001/api/speedwalls')
        .then(function(response) {
            currentComponent.setState({
                speedWalls: response.data
            })
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    
    render() {
        return (
            <main>
                {
                    this.state.speedWalls.map(c => {
                        return <Card name={c.name} content={c.description} id={c.id} key={c.id}/>
                    })
                }
            </main>
        )
    }
}

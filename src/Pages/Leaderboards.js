import React, { Component } from 'react';
import LeaderboardTable from '../Components/LeaderboardTable';
import Card from '../Components/Card';
import axios from 'axios';

export default class Leaderboards extends Component {
    
    state = {
        speedWalls: []
    }

    constructor(props) {
        super(props)
        this.state = {
            speedWalls: []
        }   
    }

    componentDidMount() {
        console.log(this.props.match.params.id)

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
        var renderIt = null
        if(this.props.match.params.id == undefined) {
            renderIt = this.state.speedWalls.map(c => {
                return <Card name={c.name} content={c.description} id={c.id} key={c.id}/>
            });
        } else {
            renderIt = <LeaderboardTable id={this.props.match.params.id}></LeaderboardTable>
        }
        return (
            <main>
                {renderIt}
            </main>
           
        );
    }
}

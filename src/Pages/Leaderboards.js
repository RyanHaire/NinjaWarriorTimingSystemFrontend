import React, { Component } from 'react';
import LeaderboardTable from '../Components/LeaderboardTable';
import Card from '../Components/Card';
import axios from 'axios';
import '../styles/Leaderboard.css';

export default class Leaderboards extends Component {
    
    state = {
        speedWalls: []
    }

    componentDidMount() {
        let currentComponent = this;
        
        //axios.get('http://142.55.32.86:50171/api/speedwalls')
        axios.get('http://localhost:5000/api/speedwalls')
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
        if(this.props.match.params.id === undefined) {
            renderIt = this.state.speedWalls.map(c => {
                return <Card name={c.name} content={c.description} id={c.id} key={c.id}/>
            });
        } else {
            renderIt = <LeaderboardTable id={this.props.match.params.id}></LeaderboardTable>
        }
        return (
            <main>
                <div className="speedwall-card-container">
                    {renderIt}
                </div>
            </main>
           
        );
    }
}

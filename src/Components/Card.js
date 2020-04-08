import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Card.css';

export default class Card extends Component {

    render() {
        return (
            <div className="card">
                <div className='card-top'>
                    <img className="card-top-img" alt="speed wall" src="/images/speed-wall.JPG"></img>
                </div>
                <div className='card-bottom'>
                    <div className='card-title'>
                        <h3>{this.props.name}</h3>
                    </div>
                    <div className='card-info'>
                        <p className="card-info-p">{this.props.content}</p>
                    </div>
                    <Link to={{pathname: `/leaderboards/${this.props.id}`}} className="card-link" params={{id: this.props.id}}>See the leaderboard!</Link>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Card.css';
import '../styles/Global.css';

export default class Card extends Component {

    render() {
        return (
            <div className="card">
                <div className='card-top'>
                    <img alt="speed wall" src="#"></img>
                </div>
                <div className='card-bottom'>
                    <div className='card-title'>
                        <h5>{this.props.name}</h5>
                    </div>
                    <div className='card-info'>
                        {this.props.content}
                    </div>
                    <Link to={{pathname: `/leaderboards/${this.props.id}`}} className="card-link" params={{id: this.props.id}}>See the leaderboard!</Link>
                </div>
            </div>
        )
    }
}

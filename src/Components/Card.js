import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Card.css';
import '../styles/Global.css';

export default class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div className='card-top'>
                    <img alt="picture of speed wall" src="#"></img>
                </div>
                <hr></hr>
                <div className='card-bottom'>
                    <div className='card-name'>
                        {this.props.name}
                    </div>
                    <div className='card-content'>
                        {this.props.content}
                    </div>
                    <div>
                        <Link to="/leaderboards" className="Button">See the leaderboard!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

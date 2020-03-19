import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/PodiumCard.css';

export default class PodiumCard extends Component {

    checkRank(rank) {
        if(rank == 1) {
            return <div><img src="/images/gold-medal.png"/></div>
        } else if(rank == 2) {
            return <div><img src="/images/silver-medal.png"/></div>
        } else {
            return <div><img src="/images/bronze-medal.png"/></div>
        }
    }

    render() {
        return (
            <div className="card">
                <div className='card-top'>
                    <div className="card-top-image"></div>
                    <div className="card-top-medal">{this.checkRank(this.props.rank)}</div>
                </div>
                <div className='card-bottom'>
                    <div className='card-title'>
                        <h3 className="card-title-h">{this.props.firstName + " " + this.props.lastName}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
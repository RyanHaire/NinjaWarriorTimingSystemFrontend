import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="navbar">
                    <div className='left-side'>    
                        <Link to="/" className="link">
                            Home
                        </Link>
                        <Link to="/leaderboards" className='link'>
                            Leaderboards
                        </Link>
                    </div>
                    <div className="right-side">
                        <Link to="/login"className="link">
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
           
        )
    }
}

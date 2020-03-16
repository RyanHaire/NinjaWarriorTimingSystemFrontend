import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Leaderboards from '../Pages/Leaderboards';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">
                        Home
                    </Link>
                    <Link to="/leaderboards" className="item">
                        Leaderboards
                    </Link>
                    <div className="right menu">
                        <Link to="/login"className="ui item active">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            
        )
    }
}
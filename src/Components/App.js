import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';
import Home from '../Pages/Home';
import Leaderboards from '../Pages/Leaderboards';

export default class App extends Component {
    render() {
        return (
            <div>   
                <BrowserRouter>
                    <div>
                        <Header></Header>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/leaderboards' component={Leaderboards}></Route>
                        <Footer></Footer>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

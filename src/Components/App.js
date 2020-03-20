import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';
import Home from '../Pages/Home';
import Leaderboards from '../Pages/Leaderboards';
import '../styles/Global.css';

export default class App extends Component {
    render() {
        return (
            <div>   
                <BrowserRouter>
                    <Header></Header>
                    <div>
                        <Switch>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/leaderboards/:id' component={Leaderboards}/>
                            <Route path='/leaderboards' component={Leaderboards}/>
                            
                        </Switch>
                        
                    </div>
                    <Footer></Footer>
                </BrowserRouter>
            </div>
        )
    }
}

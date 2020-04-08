import React, { Component } from 'react'
import '../styles/Global.css'
import SearchBar from '../Components/SearchBar'

export default class Home extends Component {

    
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <main className="home-container">
                <SearchBar history={this.props.history}/>
            </main>
        )
    }
}

import React, { Component } from 'react'
import '../styles/SearchBar.css'

export default class SearchBar extends Component {
    state = {
        userName: ""
    }

    handleChange(e) {
        let currentComponent = this;
        currentComponent.setState({userName: e.target.value})
    }

    handleClick() {
        this.props.history.push(`/user/${this.state.userName}`)
    }

    render() {
        return (
            <div className="search-bar-container">
                <form className="search-form">
                    <input type="text" className="search-bar" value={this.state.userName} onChange={this.handleChange.bind(this)} placeholder="Search for a user"/>
                    <button className="search-btn" onClick={this.handleClick.bind(this)}>Search</button>
                </form>
            </div>
        )
    }
}

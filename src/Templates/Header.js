import React from 'react';
import NavBar from '../Components/NavBar';
import '../styles/Header.css'

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <NavBar/>
            </header>
        )
    }
}
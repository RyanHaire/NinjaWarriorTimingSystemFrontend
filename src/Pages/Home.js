import React, { Component } from 'react'
import '../styles/Global.css'
import Card from '../Components/Card';

export default class Home extends Component {

    componentDidMount() {

    }
    
    render() {
        return (
            <main>
                <Card name="course 1" content="this is for more information of the speed wall"/>
                <Card name="course 2" content="this is for more information of the speed wall"/>
                <Card name="course 3" content="this is for more information of the speed wall"/>
                <Card name="course 4" content="this is for more information of the speed wall"/>
            </main>
        )
    }
}

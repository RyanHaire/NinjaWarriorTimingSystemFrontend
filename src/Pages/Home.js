import React, { Component } from 'react'
import '../styles/Global.css'
import Card from '../Components/Card';

export default class Home extends Component {

    componentDidMount() {

    }
    
    render() {
        return (
            <main>
                <Card name="course 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis vitae sem bibendum, posuere lectus congue, condimentum sem."/>
                <Card name="course 2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis vitae sem bibendum, posuere lectus congue, condimentum sem."/>
                <Card name="course 3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis vitae sem bibendum, posuere lectus congue, condimentum sem."/>
                <Card name="course 4" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis vitae sem bibendum, posuere lectus congue, condimentum sem."/>
            </main>
        )
    }
}

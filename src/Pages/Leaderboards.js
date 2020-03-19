import React, { Component } from 'react'
import LeaderboardTable from '../Components/LeaderboardTable'
import '../styles/Global.css'

export default class Leaderboards extends Component {

    componentDidMount() {
      //  console.log(this.props)
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <main>
                <div>
                    <LeaderboardTable id={this.props.match.params.id}></LeaderboardTable>
                </div>
            </main>
        )
    }
}

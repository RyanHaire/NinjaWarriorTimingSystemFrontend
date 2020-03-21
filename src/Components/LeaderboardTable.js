import React, { Component } from 'react'
import axios from 'axios'
import PodiumCard from './PodiumCard';
import '../styles/Leaderboard.css';

export default class LeaderboardTable extends Component {

    state = {
        userTimes: [],
        errors: []
    }

    componentDidMount() {
        var wallId = this.props.id
        let component = this;
        
        var newArr = this.state.errors

        axios.get(`https://localhost:5001/api/times/speedwall/${wallId}`)
        .then((res) => {
            component.setState({
                userTimes: res.data
            })
        })
        .catch((err) => {
            newArr.push(err)
            this.setState({
                errors: newArr
            })
        })
    }

    render() {
        return (
            <div className="leaderboard-table-container">
                <div className="podium-container"> 
                    {this.state.userTimes.map((person,index) => {
                        if(index < 3) {
                            return <PodiumCard firstName={person.firstName} lastName={person.lastName} rank={index + 1}/>
                        }
                        return ""
                    })}
                </div>
               
                <table className="leaderboard-table">
                    <thead>
                        <tr className="leaderboard-table-tr">
                            <th className="leaderboard-table-th">Rank</th>
                            <th className="leaderboard-table-th">First Name</th>
                            <th className="leaderboard-table-th">Last Name</th>
                            <th className="leaderboard-table-th">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {console.log(this.state.userTimes[0].times[0].dateTime)} */}
                    {/*console.log(this.state.userTimes[0].times)*/}
                    {this.state.userTimes.map((person, index) => {
                      
                        return( 
                            <tr key={index} className="leaderboard-table-tr">
                                <td className="leaderboard-table-td rank">{index + 1}</td>
                                <td className="leaderboard-table-td">{person.firstName}</td>
                                <td className="leaderboard-table-td">{person.lastName}</td>
                                <td className="leaderboard-table-td">{person.time}</td>
                            </tr>
                        )

                    })}
                    </tbody>
                    <tfoot>
                        
                    </tfoot>                  
                </table>
            </div>
        )
    }
}
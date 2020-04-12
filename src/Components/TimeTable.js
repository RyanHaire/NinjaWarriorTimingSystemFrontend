import React, { Component } from 'react'
import axios from 'axios'
import '../styles/TimeTable.css';

export default class LeaderboardTable extends Component {

    state = {
        times: [],
        error: []
    }

    componentDidMount() {
        this.callApi();
    }

    componentDidUpdate() {
        this.callApi();
    }

    callApi() {
        var wallId = this.props.id
        var username = this.props.username
        let component = this;
        
        // grab all the times for a user on a certain speed wall
        //axios.get(`http://142.55.32.86:50171/api/times/speedwall/${wallId}/${username}`)
        axios.get(`http://localhost:5000/api/times/speedwall/${wallId}/${username}`)
        .then((res) => {
            component.setState({
                times: res.data
            })
        })
        .catch((error) => {
            console.log(error)
            component.setState({
                error: "Could not find any times for the user."
            })
        })
    }

    render() {
        return (
            <div className="time-table-container">
               
                <table className="time-table">
                    <thead>
                        <tr className="time-table-tr">
                            <th className="time-table-th">Rank</th>
                            <th className="time-table-th">Time</th>
                            <th className="time-table-th">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {console.log(this.state.userTimes[0].times[0].dateTime)} */}
                    {/*console.log(this.state.userTimes[0].times)*/}
                    {this.state.times.map((time, index) => {
                      console.log(time)
                        return( 
                            <tr key={index} className="time-table-tr">
                                <td className="time-table-td rank">{index + 1}</td>
                                <td className="time-table-td">{time.time}</td>
                                <td className="time-table-td">{time.date}</td>
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
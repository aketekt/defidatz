import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ComposedChart, Area, Tooltip, Legend, ResponsiveContainer } from 'recharts';



class History extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }

    callAPI() {
        fetch("https://fathomless-fjord-82402.herokuapp.com/alltweets")
            .then(res => res.json())
            .then(data => this.setState({ apiResponse: data }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        this.sortBy = {
            id: 'symbol',  // default sort column name
            desc: false  // default sort order
          };
    }


    render() {

        return (
         
            
        <div className='graph-box'>

        <div className="titlebox">
                <h2><div className='icon'>&#9194;</div> History</h2>
                <p className="title">Total mentions across all tracked tokens.</p>
            </div>

        <ResponsiveContainer width="98%" height={300}>
            <ComposedChart  data={this.state.apiResponse}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <XAxis dataKey="date" />
                <Area strokeWidth={3} type="monotone" dataKey="tweets" fill="#A98DE8" stroke="#9A6DF8"  activeDot={{ fill: "#fe14fd", stroke: '#fe14fd', strokeWidth: 2, r: 7 }} />
                <Tooltip />
<Legend />
            </ComposedChart>
        </ResponsiveContainer>

       


        </div>

        ); 
    }
}

export default History;








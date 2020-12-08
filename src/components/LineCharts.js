import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { connect } from 'react-redux'
import { fetchLineChartdataAction } from '../myactions/action'
import { render } from '@testing-library/react';
import axios from 'axios';



class LineCharts extends Component {
    state = {
        data: []
    }


    componentDidMount() {
        axios.get(`https://5fc952922af77700165ae75d.mockapi.io/api/task/line-chart`)
            .then(res => {
                // console.log('LLLL');
                // console.log(res);
                // console.log('LLLL');
                const data = res.data;
                console.log(data)
                this.setState({data});
            
            }).catch(error => {
                console.log(error);
            });
    }



    render() {
        return (
            <div>
                <p>LineChart page</p>
                <LineChart width={1350} height={300} data={this.state.data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="id" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="incoming_data" stroke="#8884d8" />
                    <Line type="monotone" dataKey="data_error" stroke="#82ca9d" />
                </LineChart>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

        data: state.data,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        fetchDatawithRedux: () => { dispatch(fetchLineChartdataAction()) }
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(LineCharts);
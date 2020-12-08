import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell, Label } from 'recharts';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function DonutCharts(props) {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const data01 = [{ name: 'Group A', value: 5 }, { name: 'Group B', value: 4 },
    { name: 'Group C', value: 1 }, { name: 'Group D', value: 1 }]

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://5fc952922af77700165ae75d.mockapi.io/api/task/card-data`)
            .then(res => {
                const data = res.data;
               // console.log(data)
                setData(data);
            }).catch(error => {
                console.log(error);
            });


    }, [])

    return (
        <Card>
            <h1>{props.title}</h1>
            <PieChart style={{ marginRight: 700 }} width={400} height={300}>
                <Pie
                    data={data01}
                    cx={300}
                    cy={150}
                    innerRadius={60}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={2}
                >
                    {/* <Label
                        value="Currently" position="center" className='label-top' fontSize='27px'
                    /> */}

                    <Label
                        value={props.price} position="centerBottom" className='label-top' fontSize='27px'
                    />
                    <Label
                        value="tasks left" position="centerTop" className='label'
                    />
                    {
                        data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
            <p marginLeft={400}>{props.color}{props.children}</p>
        </Card>
    )

}

export default DonutCharts
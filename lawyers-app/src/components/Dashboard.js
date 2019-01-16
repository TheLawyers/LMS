import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const Dashboard = (props) => {
    let label = Object.keys(props.dashboard)
    let num = Object.values(props.dashboard)

    const data = {
        labels:
            label
        ,
        datasets: [{
            data: num,
            backgroundColor: [
                '#a99c8b',
                '#a3b8a2',
                '#669999',
                '#667b83',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#84796a',
                '#879986',
                '#4d7777',
                '#4a5c63',
                '#FFCE56'
            ]
        }]
    };

    return (
        <div>
            <h2>The most popular type of Cases</h2>
            <Doughnut data={data} />
        </div>
    );
}


export default Dashboard;


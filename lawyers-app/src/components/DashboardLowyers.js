import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';


const DashboardLowyers = (props) => {
    console.log(props)
    const firstObject = {
        criminal: props.dashboardLowyers ? props.dashboardLowyers.criminal : '',
        legalrights: props.dashboardLowyers ? props.dashboardLowyers.legalrights : '',
        familystatus: props.dashboardLowyers ? props.dashboardLowyers.familystatus : '',
        commercial: props.dashboardLowyers ? props.dashboardLowyers.commercial : '',
    }
    let label = Object.keys(firstObject)
    let num = Object.values(firstObject)

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

    // console.log("BUSY", props.dashboardLowyers.busiest)

    // const busy = {
    //     months: props.dashboardLowyers ? props.dashboardLowyers.busiest.map(el => el.month ) : '',
    //     counts: props.dashboardLowyers ? props.dashboardLowyers.busiest.map(el => el.month_count) : '',
    // }

    // let count = busy.counts ? (busy.counts).map(num => Number(num)) : [0];

    // console.log("busy.counts\n\n\n", [...count])
    // const busiestDay = {
    //     labels: busy.months,
    //     datasets: [
    //         {
    //             label: 'Busiest month',
    //             backgroundColor: 'rgba(255,99,132,0.2)',
    //             borderColor: 'rgba(255,99,132,1)',
    //             borderWidth: 1,
    //             hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //             hoverBorderColor: 'rgba(255,99,132,1)',
    //             data: [...count]
    //         }
    //     ]
    // };

    return (
        <div>
            <h2>The most popular type of Cases for you {props.lawyerName}</h2>
            <div>
                <Pie data={data} />
            </div>
            <div>
                <h2>Number of Cases That you</h2>
                <h2> {props.dashboardLowyers ? props.dashboardLowyers.casesNo : ''}</h2>
                <div>
                    {/* <Bar data={busiestDay} /> */}
                </div>
            </div>


            <div><h2>Tomorrow's Cases</h2>
                <h2> {props.dashboardLowyers ? props.dashboardLowyers.oneCase : ''}</h2>
            </div>
        </div>
    );
}


export default DashboardLowyers;


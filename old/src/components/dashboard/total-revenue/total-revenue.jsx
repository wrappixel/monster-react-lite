import React from "react";

import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

import Chart from 'react-apexcharts';

const TotalRevenue = () => {

    const options = {
        chart: {
            toolbar: {
                show: false
            },
            stacked: true,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 4,
            colors: ['transparent']
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'flat'
            },
        },
        colors: ['#0f8edd', '#11a0f8', '#51bdff'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        responsive: [
            {
                breakpoint: 2500,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: '30%',
                        }
                    }
                }
            }
        ]
    };
    const series = [
        {
            name: "2015",
            data: [800000, 1200000, 1400000, 1300000, 1200000, 1400000, 1300000, 1300000, 1200000]
        },
        {
            name: "2016",
            data: [200000, 400000, 500000, 300000, 400000, 500000, 300000, 300000, 400000]
        },
        {
            name: "2020",
            data: [100000, 200000, 400000, 600000, 200000, 400000, 600000, 600000, 200000]
        }
    ];

    return (
        <Card className="card">
            <CardBody className="card-body">
                <div className="d-md-flex align-items-center">
                    <CardTitle className="card-title">Total Revenue</CardTitle>
                    <div className="ml-auto">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <h6 className="text-muted"><i className="fa fa-circle mr-1" style={{ color: '#51bdff' }}></i>2015</h6>
                            </li>
                            <li className="list-inline-item">
                                <h6 className="text-muted"><i className="fa fa-circle mr-1" style={{ color: '#11a0f8' }}></i>2016</h6>
                            </li>
                            <li className="list-inline-item">
                                <h6 className="text-muted"><i className="fa fa-circle mr-1 text-info"></i>2020</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="clear"></div>
                <div className="total-sales" style={{ height: '339px' }}>
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        height="339"
                    />
                </div>
            </CardBody>
        </Card>
    );
}

export default TotalRevenue;

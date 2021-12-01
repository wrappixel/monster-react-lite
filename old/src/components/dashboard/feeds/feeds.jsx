/* eslint-disable */
import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const Feeds = () => {
    return (
        <Card className="card">
            <CardBody className="card-body">
                <CardTitle className="card-title">Feeds</CardTitle>
                <ul className="feeds pl-0 mb-0 mt-3 pt-1">
                    <li className="feed-item d-flex p-2 align-items-center">
                        <a href="#" className="btn btn-circle d-flex align-items-center justify-content-center bg-light-info">
                            <i className="fas fa-bell"></i>
                        </a>
                        <div className="ml-3 text-truncate">You have 4 pending tasks.</div>
                        <div className="justify-content-end text-truncate ml-auto">
                            <span className="text-muted font-12">Just Now</span>
                        </div>
                    </li>
                    <li className="feed-item d-flex p-2 align-items-center">
                        <a href="#" className="btn btn-circle d-flex align-items-center justify-content-center bg-light-success">
                            <i className="ti-server"></i>
                        </a>
                        <div className="ml-3 text-truncate">Server #1 overloaded.</div>
                        <div className="justify-content-end text-truncate ml-auto">
                            <span className="text-muted font-12">2 Hours ago</span>
                        </div>
                    </li>
                    <li className="feed-item d-flex p-2 align-items-center">
                        <a href="#" className="btn btn-circle d-flex align-items-center justify-content-center bg-light-warning">
                            <i className="ti-shopping-cart"></i>
                        </a>
                        <div className="ml-3 text-truncate">New order received.</div>
                        <div className="justify-content-end text-truncate ml-auto">
                            <span className="text-muted font-12">31 May</span>
                        </div>
                    </li>
                    <li className="feed-item d-flex p-2 align-items-center">
                        <a href="#" className="btn btn-circle d-flex align-items-center justify-content-center bg-light-danger">
                            <i className="ti-user"></i>
                        </a>
                        <div className="ml-3 text-truncate">New user registered.</div>
                        <div className="justify-content-end text-truncate ml-auto">
                            <span className="text-muted font-12">30 May</span>
                        </div>
                    </li>
                    <li className="feed-item d-flex p-2 align-items-center">
                        <a href="#" className="btn btn-circle d-flex align-items-center justify-content-center bg-light-inverse">
                            <i className="fas fa-bell"></i>
                        </a>
                        <div className="ml-3 text-truncate">New Version just arrived.</div>
                        <div className="justify-content-end text-truncate ml-auto">
                            <span className="text-muted font-12">27 May</span>
                        </div>
                    </li>
                    <li className="feed-item d-flex p-2 align-items-center">
                        <a href="#" className="btn btn-circle d-flex align-items-center justify-content-center bg-light-info">
                            <i className="fas fa-bell"></i>
                        </a>
                        <div className="ml-3 text-truncate">You have 4 pending tasks. </div>
                        <div className="justify-content-end text-truncate ml-auto">
                            <span className="text-muted font-12">Just Now</span>
                        </div>
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
}

export default Feeds;

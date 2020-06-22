import React from "react";

import img2 from '../../../assets/images/users/2.jpg';

import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

const Projects = () => {

    return (
        <Card>
            <CardBody>
                <div className="d-md-flex no-block">
                    <CardTitle>Projects of the Month</CardTitle>
                    <div className="ml-auto">
                        <select className="custom-select">
                            <option defaultValue>January</option>
                            <option value="1">February</option>
                            <option value="2">March</option>
                            <option value="3">April</option>
                        </select>
                    </div>
                </div>
                <div className="table-responsive mt-2">
                    <table className="table stylish-table mb-0 mt-2 no-wrap v-middle">
                        <thead>
                            <tr>
                                <th className="font-weight-normal text-muted border-0 border-bottom" colSpan="2">Assigned</th>
                                <th className="font-weight-normal text-muted border-0 border-bottom">Name</th>
                                <th className="font-weight-normal text-muted border-0 border-bottom">Priority</th>
                                <th className="font-weight-normal text-muted border-0 border-bottom">Budget</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="round rounded-circle text-white d-inline-block text-center bg-info">S</span></td>
                                <td>
                                    <h6 className="font-weight-medium mb-0 nowrap">Sunil Joshi</h6><small className="text-muted no-wrap">Web Designer</small></td>
                                <td>Elite Admin</td>
                                <td><span className="badge badge-light-success text-success">Low</span></td>
                                <td>$3.9K</td>
                            </tr>
                            <tr className="active">
                                <td><span className="round text-white d-inline-block text-center"><img src={img2} alt="user" className="rounded-circle" width="50" /></span></td>
                                <td>
                                    <h6 className="font-weight-medium mb-0 nowrap">Andrew</h6><small className="text-muted no-wrap">Project Manager</small></td>
                                <td>Real Homes</td>
                                <td><span className="badge badge-light-info text-info">Medium</span></td>
                                <td>$23.9K</td>
                            </tr>
                            <tr>
                                <td><span className="round rounded-circle text-white d-inline-block text-center bg-success">B</span></td>
                                <td>
                                    <h6 className="font-weight-medium mb-0 nowrap">Bhavesh patel</h6><small className="text-muted no-wrap">Developer</small></td>
                                <td>MedicalPro Theme</td>
                                <td><span className="badge badge-light-danger text-danger">High</span></td>
                                <td>$12.9K</td>
                            </tr>
                            <tr>
                                <td><span className="round rounded-circle text-white d-inline-block text-center bg-primary">N</span></td>
                                <td>
                                    <h6 className="font-weight-medium mb-0 nowrap">Nirav Joshi</h6><small className="text-muted no-wrap">Frontend Eng</small></td>
                                <td>Elite Admin</td>
                                <td><span className="badge badge-light-success text-success">Low</span></td>
                                <td>$10.9K</td>
                            </tr>
                            <tr>
                                <td><span className="round rounded-circle text-white d-inline-block text-center bg-warning">M</span></td>
                                <td>
                                    <h6 className="font-weight-medium mb-0 nowrap">Micheal Doe</h6><small className="text-muted no-wrap">Content Writer</small></td>
                                <td>Helping Hands</td>
                                <td><span className="badge badge-light-danger text-danger">High</span></td>
                                <td>$12.9K</td>
                            </tr>
                            <tr>
                                <td><span className="round rounded-circle text-white d-inline-block text-center bg-danger">N</span></td>
                                <td>
                                    <h6 className="font-weight-medium mb-0 nowrap">Johnathan</h6><small className="text-muted no-wrap">Graphic</small></td>
                                <td>Digital Agency</td>
                                <td><span className="badge badge-light-danger text-danger">High</span></td>
                                <td>$2.6K</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}

export default Projects;

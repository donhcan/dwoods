import React, { Component } from 'react';

class Software extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="software">
                <div className="services-area ptb-70 bg-f7fafd">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/feature2.png" alt="image" />
                                    <div className="circle-img">
                                        <img src="/images/circle.png" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="content">
                                    <h2>Software the company uses</h2>
                                    <div className="bar"></div>
                                    <p>We have experience with many software tools</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Quickbooks
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                dynamics
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Concur
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Expensify Netsuite
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Sage
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                SAP
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

           
            </React.Fragment>
        );
    }
}

export default Software;
import React, { Component } from 'react';
import Link from 'next/link';

class IndustryList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="industry">
                <div className="services-area ptb-70">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h2>Industries and indiviudals</h2>
                                    <div className="bar"></div>
                                    <p>With extensive knowledge and experience, we provide our clients across a range of industries with assurance, tax and advisory services to meet their specific business needs.</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Small Business
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Local and International Businesses
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Schools
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Tax Office, 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Banks
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Many others
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/feature1.png" alt="image" />
                                    <div className="circle-img">
                                        <img src="/images/circle.png" alt="image" />
                                    </div>
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

export default IndustryList;
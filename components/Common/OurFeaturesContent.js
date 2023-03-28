import React, { Component } from 'react';

class OurFeaturesContent extends Component {
    render() {
        return (
            <section className="features-area ptb-70 bg-f6f4f8">
                <div className="container">
                    <div className="section-title">
                        <h2>Our features</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-settings"></i>
                                </div>

                                <h3>Incredible infrastructure</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-f78acb">
                                    <i className="flaticon-envelope-of-white-paper"></i>
                                </div>

                                <h3>Email notifications</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-cdf1d8">
                                    <i className="flaticon-menu"></i>
                                </div>

                                <h3>Simple dashboard</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-c679e3">
                                    <i className="flaticon-info"></i>
                                </div>

                                <h3>Information retrieval</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-eb6b3d">
                                    <i className="flaticon-cursor"></i>
                                </div>

                                <h3>Drag and drop functionality</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-alarm"></i>
                                </div>

                                <h3>Deadline reminders</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurFeaturesContent;
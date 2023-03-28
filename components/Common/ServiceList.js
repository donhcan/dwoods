import React, { Component } from 'react';

class ServiceList extends Component {
    render() {
        return (
            <section className="features-area ptb-70 bg-f6f4f8">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <div className="bar"></div>
                        <p>Woods is an independent online business for all your professional accounting services</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="fas fa-balance-scale"></i>
                                </div>

                                <h3>Balance Sheets</h3>
                                <p>Our strong background in accounting and tax, combined with our knowledge of your business and industry, allows us to provide 360 degrees of insight and guidance.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-f78acb">
                                <i className="fab fa-amazon-pay"></i>
                                </div>

                                <h3>Payables and Receivables</h3>
                                <p>From income tax planning and consulting to estate and retirement planning, we are here to support you and your family’s financial needs.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-cdf1d8">
                                <i className="fas fa-hand-holding-usd"></i>
                                </div>

                                <h3>Taxes</h3>
                                <p>We invest in the future of our relationships by conducting a detailed review of your current business tax elections, tax structure and business goals.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-c679e3">
                                <i className="fas fa-user-shield"></i>
                                </div>

                                <h3>Notary Services</h3>
                                <p>From full scope assurance and attestation services to streamlined compilations, transparency, efficiency and knowledge sharing are at the heart of what we do.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceList;
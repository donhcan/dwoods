import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedCard extends Component {
    render() {
        return (
            <div className="featured-boxes-area">
                <div className="container">
                    <div className="featured-boxes-inner">
                        <div className="row m-0">
                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-fb7756">
                                    <i className="fas fa-balance-scale"></i>
                                    </div>

                                    <h3>Balance Sheets</h3>
                                    <p>Our strong background in accounting and tax, combined with our knowledge of your business and industry, allows us to provide 360 degrees of insight and guidance.</p>

                                    <Link href="/#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-facd60">
                                    <i className="fab fa-amazon-pay"></i>
                                    </div>

                                    <h3>Payables and Receivables</h3>
                                    <p>From income tax planning and consulting to estate and retirement planning, we are here to support you and your family’s financial needs.</p>

                                    <Link href="/#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                    <i className="fas fa-hand-holding-usd"></i>
                                    </div>

                                    <h3>Taxes</h3>
                                    <p>We invest in the future of our relationships by conducting a detailed review of your current business tax elections, tax structure and business goals.</p>

                                    <Link href="/#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon">
                                    <i className="fas fa-user-shield"></i>
                                    </div>

                                    <h3>Notary Services</h3>
                                    <p>From full scope assurance and attestation services to streamlined compilations, transparency, efficiency and knowledge sharing are at the heart of what we do.</p>

                                    <Link href="/#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedCard;
import React, { Component } from 'react';
import Link from 'next/link';

class PartnerContent extends Component {
    render() {
        return (
            <div className="partner-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our trusted partner</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.​</p>
                    </div>

                    <div className="partner-inner">
                        <div className="row align-items-center">
                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner1.png" alt="Partner" />
                                        <img src="/images/partners/partner1.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner2.png" alt="Partner" />
                                        <img src="/images/partners/partner2.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner3.png" alt="Partner" />
                                        <img src="/images/partners/partner3.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner4.png" alt="Partner" />
                                        <img src="/images/partners/partner4.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner5.png" alt="Partner" />
                                        <img src="/images/partners/partner5.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner6.png" alt="Partner" />
                                        <img src="/images/partners/partner6.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner7.png" alt="Partner" />
                                        <img src="/images/partners/partner7.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner8.png" alt="Partner" />
                                        <img src="/images/partners/partner8.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner9.png" alt="Partner" />
                                        <img src="/images/partners/partner9.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="/#">
                                    <a target="_blank">
                                        <img src="/images/partners/partner7.png" alt="Partner" />
                                        <img src="/images/partners/partner7.png" alt="Partner" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerContent;
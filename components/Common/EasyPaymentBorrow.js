import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'

class EasyPaymentBorrow extends Component {
    render() {
        return (
            <section className="invoicing-area ptb-70">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="invoicing-content">
                                <h2>Easy Payment to borrow free get a better filling at home</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer.</p>

                                <Link href="/contact">
                                    <a className="btn btn-primary">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="invoicing-image">
                                <div className="main-image">
                                    <ReactWOW delay='0.7s' animation='zoomIn'>
                                        <img src="/images/invoicing/invoicing-shape1.png" alt="image" />
                                    </ReactWOW>

                                    <ReactWOW delay='1s' animation='fadeInLeft'>
                                        <img src="/images/invoicing/invoicing-shape2.png" alt="image" />
                                    </ReactWOW>

                                    <ReactWOW delay='1.3s' animation='fadeInLeft'>
                                        <img src="/images/invoicing/invoicing-shape3.png" alt="image" />
                                    </ReactWOW>

                                    <ReactWOW delay='1s' animation='fadeInRight'>
                                        <img src="/images/invoicing/invoicing-shape4.png" alt="image" />
                                    </ReactWOW>
                                </div>

                                <div className="main-mobile-image">
                                    <ReactWOW delay='0.7s' animation='zoomIn'>
                                        <img src="/images/invoicing/invoicing-main-pic.png" alt="image" />
                                    </ReactWOW>
                                </div>

                                <div className="circle-image">
                                    <img src="/images/invoicing/invoicing-circle1.png" alt="image" />
                                    <img src="/images/invoicing/invoicing-circle2.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default EasyPaymentBorrow;
import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-md-12">
                            <div className="single-footer-widget">
                                <p>2685 Simons Hollow Road, New York</p>
                                <div className='button-block-div'>
                                    <a href='tel:+1 (555) 555-1234'>+1 (555) 555-1234 &nbsp;</a>
                                    <a href='mailto:Support@woods.com'>| M: Support@woods.com</a>
                                </div>
                                <ul className="social-links">
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="copyright-area">
                                    <p>©{currentYear} Woods. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-12 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/about-us">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Blogs</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-12 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Why Us</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="/#" >
                                            <a>Our Reviews</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#" >
                                            <a className='active'>Blogs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-12 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Services</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="/#">
                                            <a>Our Missions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Features</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/#">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>FAQ</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                    
                </div>
            </footer>
        );
    }
}

export default Footer;
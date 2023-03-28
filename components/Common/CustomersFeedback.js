import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

import feedback from "../constants/feedback.json";



const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 0,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
}

class CustomersFeedback extends Component {

    _isMounted = false;
    state = {
        display:false
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="feedback-area ptb-70 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>What customers say about Us</h2>
                        <div className="bar"></div>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="item">
                            <div className="single-feedback">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>
                                    <q>{feedback[0].content}</q>
                                </p>

                                <div className="client-img">
                                    <img src="/images/clients/client1.jpg" alt="image" />
                                    <h3>{feedback[0].name}</h3>
                                    <span>{feedback[0].job}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="single-feedback">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>
                                    <q>{feedback[1].content}</q>
                                </p>

                                <div className="client-img">
                                    <img src="/images/clients/client2.jpg" alt="image" />
                                    <h3>{feedback[1].name}</h3>
                                    <span>{feedback[1].job}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="single-feedback">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>
                                <q>{feedback[2].content}</q>
                                </p>

                                <div className="client-img">
                                    <img src="/images/clients/client3.jpg" alt="image" />
                                    <h3>{feedback[2].name}</h3>
                                    <span>{feedback[2 ].job}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="single-feedback">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>
                                    <q>{feedback[3].content}</q>
                                </p>

                                <div className="client-img">
                                    <img src="/images/clients/client4.jpg" alt="image" />
                                    <h3>{feedback[3].name}</h3>
                                    <span>{feedback[3].job}</span>
                                </div>
                            </div>
                        </div>
                        
                    
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default CustomersFeedback;
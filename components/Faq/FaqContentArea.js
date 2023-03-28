import React, { Component } from 'react';
import FaqTextContent from './FaqTextContent';
import FaqContactForm from './FaqContactForm';

class FaqContentArea extends Component {
    render() {
        return (
            <div className="faq-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="faq-content">
                                <h2>Frequently Asked Questions</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>

                                <div className="faq-image">
                                    <img src="/images/faq.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <FaqTextContent />
                        </div>
                    </div>

                    <FaqContactForm />
                </div>
            </div>
        );
    }
}

export default FaqContentArea;
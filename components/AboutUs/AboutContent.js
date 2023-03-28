import React, { Component } from 'react';
import Link from 'next/link';

class AboutContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div className="about-area ptb-70">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-img1.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <p>As a business owner, you’re managing a lot. Keeping track of your books can often be a workload to handle. Let’s take the work out of your hand and help take the weight off your shoulders with out expertise.</p>
                                <p>We offer services such as:</p>
                                <ul>
                                    <li>
                                    Balance Sheets - Manage balance sheets and profit/loss statements 
                                    </li>
                                    <li>
                                    Payables and Receivables - We reconcile accounts, enter invoices and expenses.
                                    </li>
                                    <li>
                                    Taxes - 1099
                                    </li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutContent;
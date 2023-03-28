import React, { Component } from 'react';
import Link from 'next/link';

class ContactInfoContent extends Component {
    render() {
        return (
            <div className="contact-info">
                <h3>The first step towards wood book keeping and accounting service.</h3>
                <h6>Ready for a non-obligatory chat, got a quick question or comment?</h6>
                <div className="row">
                <i class="fas fa-mobile-alt">  &nbsp; +1 (555) 555-0000</i>
              
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
                                <i className="fab fa-twitter"></i>
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
                </ul>
            </div>
        );
    }
}

export default ContactInfoContent;
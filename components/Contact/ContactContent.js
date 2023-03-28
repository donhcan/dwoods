import React, { Component } from 'react';
import ContactInfoContent from './ContactInfoContent';
import ContactForm from './ContactForm';

class ContactContent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="contact-area ptb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <ContactInfoContent />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
              
                </div>
            </React.Fragment>
        );
    }
}

export default ContactContent;
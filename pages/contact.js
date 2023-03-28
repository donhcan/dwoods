import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import ContactContent from '../components/Contact/ContactContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent 
                    pageTitle="Contact" 
                    pageCaption="If you have an idea, we would love to hear about it." 
                />
                <ContactContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;
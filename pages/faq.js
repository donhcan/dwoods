import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import FaqContentArea from '../components/Faq/FaqContentArea';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="FAQ" pageCaption="Frequently Asked Questions" />
                <FaqContentArea />
                <AccountCreateArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Faq;
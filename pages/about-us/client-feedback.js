import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBannerContent from '../../components/Common/PageBannerContent';
import FeedbackList from '../../components/Common/FeedbackList';
import AccountCreateArea from '../../components/Common/AccountCreateArea';
import Footer from '../../components/Layouts/Footer';
 
class Feedback extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Client Feedback" pageCaption="All the tools you need" />
                <FeedbackList />
                <AccountCreateArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Feedback;
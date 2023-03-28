import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import IndustryList from '../components/Common/IndustryList';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';
 
class Industries extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Industries" pageCaption="All the tools you need" />
                <IndustryList />
                <AccountCreateArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Industries;
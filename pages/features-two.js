import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import OurFeaturesContent from '../components/Common/OurFeaturesContent';
import ServicesContent from '../components/FeaturesTwo/ServicesContent';
import OurFeaturesStyleTwo from '../components/Common/OurFeaturesStyleTwo';
import PartnerContent from '../components/Common/PartnerContent';
import AppDownloadContent from '../components/HomeOne/AppDownloadContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class FeaturesTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Our Features" pageCaption="All the tools you need" /> 
                <OurFeaturesContent />
                <ServicesContent />
                <OurFeaturesStyleTwo />
                <PartnerContent />
                <AppDownloadContent />
                <AccountCreateArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default FeaturesTwo;
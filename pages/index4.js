import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/HomeFour/MainBanner';
import InformationArea from '../components/HomeFour/InformationArea';
import ServiceCard from '../components/Common/ServicesCard';
import OurFeaturesContent from '../components/Common/OurFeaturesContent';
import EasyPaymentBorrow from '../components/Common/EasyPaymentBorrow';
import FunFacts from '../components/HomeFour/FunFacts';
import CustomersFeedback from '../components/Common/CustomersFeedback';
import PartnerContent from '../components/Common/PartnerContent';
import AppDownloadContent from '../components/HomeFour/AppDownloadContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import BlogCard from '../components/Common/BlogCard';
import Footer from '../components/Layouts/Footer';
import Rates from '../components/Rates/Rates';

class Index4 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <MainBanner />
                <InformationArea />
                <Rates />
                <ServiceCard />
                <OurFeaturesContent />
                <EasyPaymentBorrow />
                <FunFacts />
                <CustomersFeedback />
                <PartnerContent />
                <AppDownloadContent />
                <AccountCreateArea />
                <BlogCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index4;
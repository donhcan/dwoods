import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeThree/MainBanner';
import FeaturedCard from '../components/HomeThree/FeaturedCard';
import HowItWorks from '../components/HomeThree/HowItWorks';
import ServicesContent from '../components/HomeThree/ServicesContent';
import ComparisonsTableTwo from '../components/Common/ComparisonsTableTwo';
import OurFeaturesStyleTwo from '../components/Common/OurFeaturesStyleTwo';
import EasyPaymentBorrow from '../components/Common/EasyPaymentBorrow';
import FunFacts from '../components/HomeThree/FunFacts';
import CustomersFeedback from '../components/Common/CustomersFeedback';
import PartnerContent from '../components/Common/PartnerContent';
import AppDownloadContent from '../components/HomeThree/AppDownloadContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import BlogCard from '../components/Common/BlogCard';
import Footer from '../components/Layouts/Footer';
import Rates from '../components/Rates/Rates';

class Index3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <FeaturedCard />
                <Rates />
                <HowItWorks />
                <ServicesContent />
                <ComparisonsTableTwo />
                <OurFeaturesStyleTwo />
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

export default Index3;
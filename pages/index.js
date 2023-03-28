import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import FeaturedCard from "../components/HomeOne/FeaturedCard";
import ServicesCard from "../components/Common/ServicesCard";
import ComparisonsTable from "../components/Common/ComparisonsTable";
import OurFeaturesContent from "../components/Common/OurFeaturesContent";
import EasyPaymentBorrow from "../components/Common/EasyPaymentBorrow";
import FunFacts from "../components/HomeOne/FunFacts";
import CustomersFeedback from "../components/Common/CustomersFeedback";
import PartnerContent from "../components/Common/PartnerContent";
import AppDownloadContent from "../components/HomeOne/AppDownloadContent";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import BlogCard from "../components/Common/BlogCard";
import FooterO from "../components/Layouts/Footer";
import Rates from "../components/Rates/Rates";
import { Footer } from '../modules/Footer';
import IndustryList from '../components/Common/IndustryList';

import AboutContent from '../components/AboutUs/AboutContent';

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainBanner />
        <FeaturedCard />
        <AboutContent />
        <IndustryList />
        <CustomersFeedback />
        {/* <Rates />
        <ServicesCard />
        <ComparisonsTable />
        <OurFeaturesContent />
        <EasyPaymentBorrow />
        <FunFacts />
  
        <PartnerContent />
        <AppDownloadContent /> */}
        <AccountCreateArea />
        {/* <BlogCard /> */}
        {/* <Footer /> */}
        <FooterO />
      </React.Fragment>
    );
  }
}

export default Index;

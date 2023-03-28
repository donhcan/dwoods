import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import ServiceList from '../components/Common/ServiceList';
import Footer from '../components/Layouts/Footer';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import ServicesCard from '../components/Common/ServicesCard';
import Software from '../components/Common/Software';
 
class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Services" pageCaption="All the tools you need" />
                <ServiceList />
                <Software />
                <AccountCreateArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;
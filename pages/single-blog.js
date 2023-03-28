import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import SingleBlogContent from '../components/SingleBlog/SingleBlogContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class SingleBlog extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Single blog" pageCaption="Our latest news" />
                <SingleBlogContent />
                <AccountCreateArea /> 
                <Footer />
            </React.Fragment>
        );
    }
}

export default SingleBlog;
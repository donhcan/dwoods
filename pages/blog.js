import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import BlogContent from '../components/BlogOne/BlogContent';
import Search from '../components/Common/Search';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Blog" pageCaption="Our latest news" />
                <Search />
                <BlogContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;
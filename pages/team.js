import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import TeamMemberContent from '../components/Team/TeamMemberContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Team" pageCaption="Meet our expert team" />
                <TeamMemberContent />
                <AccountCreateArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Team;
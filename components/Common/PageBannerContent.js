import React, { Component } from 'react';

class PageBannerContent extends Component {
    render() {

        let { pageTitle, pageCaption } = this.props;
        let bgClassName = "item-bg1";

       if(pageTitle == "Client Feedback")
       {
            bgClassName = "item-feedback";
       }

        return (
            <div className={`page-title-area ${bgClassName}`}>
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <p>Independently owned. Employee driven. Client focused.Tonneson + Co has a reputation for quality service built on decades of experience providing privately-held businesses, nonprofits, multi-family offices, and individuals with assurance, tax, and advisory services.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBannerContent;
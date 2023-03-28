import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <h1>Independent online business for all your professional accounting service</h1>
                                <p>Get valuable partnership with outstanding performance with accomplished professional</p>
                                
                                <Link href="/contact">
                                    <a className="btn btn-primary">Let's Talk</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;
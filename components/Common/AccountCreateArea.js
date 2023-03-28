import React, { Component } from 'react';
import Link from 'next/link';

class AccountCreateArea extends Component {
    render() {
        return (
            <div className="account-create-area">
                <div className="container account-create-content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2>Let's Talk!</h2>
                            <p>Are you interested in exploring how we can work together?At Woods, you can get the best of the best. Contact us today.!</p>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="create-account">
                                <Link href="/sign-up">
                                    <a className="btn btn-primary">Contact Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountCreateArea;
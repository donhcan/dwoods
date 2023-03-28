import React, { Component } from 'react';
import Link from 'next/link';

class ForgotPassword extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="signup-area">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="signup-image">
                                <img src="/images/signup-bg.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="signup-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="signup-form">
                                            <div className="logo">
                                                <Link href="/">
                                                    <a>
                                                        <img src="/images/black-logo.png" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <h3>Forgot password</h3>
                                            <p>Already signed up? <Link href="/login"><a>Log in</a></Link></p>

                                            <form>
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" placeholder="Your email address" className="form-control" />
                                                </div>

                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ForgotPassword;
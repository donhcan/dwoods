import React, { Component } from 'react';
import Link from 'next/link';

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="login-area">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="login-image">
                                <img src="/images/login-bg.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="login-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="login-form">
                                            <div className="logo">
                                                <Link href="/">
                                                    <a>
                                                        <img src="/images/black-logo.png" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <h3>Welcome back</h3>
                                            <p>New to Haiper? <Link href="/sign-up"><a>Sign up</a></Link></p>

                                            <form>
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" placeholder="Your email address" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="password" name="password" id="password" placeholder="Your password" className="form-control" />
                                                </div>

                                                <button type="submit" className="btn btn-primary">Login</button>
                                                
                                                <div className="forgot-password">
                                                    <Link href="/forgot-password"><a>Forgot Password?</a></Link>
                                                </div>

                                                <div className="connect-with-social">
                                                    <button type="submit" className="facebook">
                                                        <i className="fab fa-facebook-square"></i> Connect with Facebook
                                                    </button>
                                                    <button type="submit" className="google">
                                                        <i className="fab fa-google"></i> Connect with Google
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Login;
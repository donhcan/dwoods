import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
                <div id="navbar" className="navbar-area">
                    <div className="luvion-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/logo.png" alt="logo" />
                                        <img src="/images/black-logo.png" alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link" >
                                                    Home <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                            <h3>Home</h3>
                                            <div className='submenu-list-wrap'>
                                            <li className="nav-item">
                                                    <Link href="/" activeClassName="active">
                                                        <a className="nav-link">Home demo one</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/index2" activeClassName="active">
                                                        <a className="nav-link">Home demo two</a>
                                                    </Link>
                                                </li>
                                            </div>
                                              
                                                <li className="nav-item">
                                                    <Link href="/index3" activeClassName="active">
                                                        <a className="nav-link">Home demo three</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/index4" activeClassName="active">
                                                        <a className="nav-link">Home demo four</a>
                                                    </Link>
                                                </li>
                                              
                                            </ul>
                                         
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-us" activeClassName="active">
                                                <a className="nav-link">About us <i className="fas fa-chevron-down"></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <h3>About us</h3>
                                                <div className='submenu-list-wrap'>
                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Diversity Equity and Inclusion</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Social Responsibility</a>
                                                    </Link>
                                                </li>
                                                </div>
                                                <div className='submenu-list-wrap'>
                                                <li className="nav-item">
                                                    <Link href="/about-us/client-feedback" activeClassName="active">
                                                        <a className="nav-link">Client Feedback</a>
                                                    </Link>
                                                </li>
                                                </div>
                                                <div className='submenu-list-wrap'>
                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Events</a>
                                                    </Link>
                                                </li>
                                                </div>
                                            </ul>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/services">
                                                <a className="nav-link" >
                                                    Services <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <h3>Services</h3>
                                                <div className='submenu-list-wrap'>
                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Assurance Services</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Business Tax Planning</a>
                                                    </Link>
                                                </li>
                                                </div>
                                                <div className='submenu-list-wrap'>
                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Advisory Services</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Mergers and Acquisitions</a>
                                                    </Link>
                                                </li>
                                                </div>
                                                <div className='submenu-list-wrap'>
                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">International Tax</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Individual Family and Fiduciary</a>
                                                    </Link>
                                                </li>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/industries">
                                                <a className="nav-link">
                                                    Industries <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <h3>Industries</h3>
                                                <div className='submenu-list-wrap'>
                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Manufacturing</a>
                                                    </Link>
                                                </li>
 
                                                

                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Distribution and Logistics</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Construction</a>
                                                    </Link>
                                                </li>

                                                </div>
                                                
                                                <div className='submenu-list-wrap'>

                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Professional Services</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Nonprofit Organizations & Private Schools</a>
                                                    </Link>
                                                </li>

                                                </div>
                                                <div className='submenu-list-wrap'>
                                                
                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Technology and Life Sciences</a>
                                                    </Link>
                                                </li>
 
                                                <li className="nav-item">
                                                    <Link href="#" activeClassName="active">
                                                        <a className="nav-link">Retail and Restaurant</a>
                                                    </Link>
                                                </li>
                                                </div>
                                            </ul>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/pricing" activeClassName="active">
                                                <a className="nav-link">Pricing</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog">
                                                <a className="nav-link">
                                                    Blog 
                                                </a>
                                            </Link>

                                          
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="others-options">
                                        <Link href="/login">
                                            <a className="login-btn">
                                                <i className="flaticon-user"></i> Login
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import ReactWOW from 'react-wow'

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <div className="banner-section">
                    <div className="container">
                        <div className="row m-0 align-items-center">
                            <div className="col-lg-5 col-md-12 p-0">
                                <div className="hero-content">
                                    <h1>Fast and easy business banking</h1>
                                    <p>Get the financial tools and insights to start, build, and grow your business.</p>

                                    <Link href="/sign-up">
                                        <a className="btn btn-primary">Create your account</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12 p-0">
                                <div className="hero-image">
                                    <div className="main-image">
                                        <ReactWOW delay='0.7s' animation='zoomIn'>
                                            <img src="/images/banner-image/banner-image1.png" alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='1.3s' animation='fadeInLeft'>
                                            <img src="/images/banner-image/banner-image2.png" alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='1s' animation='fadeInUp'>
                                            <img src="/images/banner-image/banner-image3.png" alt="image" />
                                        </ReactWOW>
                                    </div>

                                    <div className="main-mobile-image">
                                        <ReactWOW delay='0.7s' animation='fadeInUp'>
                                            <img src="/images/banner-image/banner-main-pic.png" alt="image" />
                                        </ReactWOW>
                                    </div>

                                    <div className="circle-image">
                                        <ReactWOW delay='1s' animation='fadeInUp'>
                                            <img src="/images/banner-image/circle1.png" alt="image" />
                                        </ReactWOW>
                                    </div>

                                    <div
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="video-btn"
                                    > 
                                        <i className="fas fa-play mr-2"></i> 
                                        Play Video
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default MainBanner;
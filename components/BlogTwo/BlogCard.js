import React, { Component } from 'react';
import Link from 'next/link';

class BlogCard extends Component {
    render() {
        return (
            <div className="row">
                {/* Blog post one */}
                <div className="col-lg-6 col-md-6">
                    <div className="single-blog-post">
                        <div className="blog">
                            <Link href="/single-blog">
                                <a>
                                    <img src="/images/blog/blog1.jpg" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="blog-post-content">
                            <ul className="entry-meta">
                                <li>
                                    <i className="far fa-user"></i>
                                    <Link href="/blog-two#">
                                        <a>Admin</a>
                                    </Link>
                                </li>
                                <li>
                                    <i className="far fa-calendar"></i>
                                    December 15, 2019
                                </li>
                            </ul>

                            <h3>
                                <Link href="/single-blog#">
                                    <a>The security risks of changing package owners</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                            <Link href="/single-blog">
                                <a className="btn btn-primary">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog post two */}
                <div className="col-lg-6 col-md-6">
                    <div className="single-blog-post">
                        <div className="blog">
                            <Link href="/single-blog">
                                <a>
                                    <img src="/images/blog/blog2.jpg" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="blog-post-content">
                            <ul className="entry-meta">
                                <li>
                                    <i className="far fa-user"></i>
                                    <Link href="/blog-two#">
                                        <a>Admin</a>
                                    </Link>
                                </li>
                                <li>
                                    <i className="far fa-calendar"></i>
                                    December 16, 2019
                                </li>
                            </ul>

                            <h3>
                                <Link href="/single-blog">
                                    <a>Tips for protecting business and Family</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                            <Link href="/single-blog">
                                <a className="btn btn-primary">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog post three */}
                <div className="col-lg-6 col-md-6">
                    <div className="single-blog-post">
                        <div className="blog">
                            <Link href="/single-blog">
                                <a>
                                    <img src="/images/blog/blog3.jpg" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="blog-post-content">
                            <ul className="entry-meta">
                                <li>
                                    <i className="far fa-user"></i>
                                    <Link href="/blog-two#">
                                        <a>Admin</a>
                                    </Link>
                                </li>
                                <li>
                                    <i className="far fa-calendar"></i>
                                    December 16, 2019
                                </li>
                            </ul>
                            <h3>
                                <Link href="/single-blog">
                                    <a>Protect Your workplace from cyber attacks</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                            <Link href="/single-blog">
                                <a className="btn btn-primary">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog post four */}
                <div className="col-lg-6 col-md-6">
                    <div className="single-blog-post">
                        <div className="blog">
                            <Link href="/single-blog">
                                <a>
                                    <img src="/images/blog/blog4.jpg" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="blog-post-content">
                            <ul className="entry-meta">
                                <li>
                                    <i className="far fa-user"></i>
                                    <Link href="/blog-two#">
                                        <a>Admin</a>
                                    </Link>
                                </li>
                                <li>
                                    <i className="far fa-calendar"></i>
                                    December 17, 2019
                                </li>
                            </ul>

                            <h3>
                                <Link href="/single-blog">
                                    <a>Business debit Fees to increase in 2019</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                            <Link href="/single-blog">
                                <a className="btn btn-primary">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog post five */}
                <div className="col-lg-6 col-md-6">
                    <div className="single-blog-post">
                        <div className="blog">
                            <Link href="/single-blog">
                                <a>
                                    <img src="/images/blog/blog5.jpg" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="blog-post-content">
                            <ul className="entry-meta">
                                <li>
                                    <i className="far fa-user"></i>
                                    <Link href="/blog-two#">
                                        <a>Admin</a>
                                    </Link>
                                </li>
                                <li>
                                    <i className="far fa-calendar"></i>
                                    December 18, 2019
                                </li>
                            </ul>

                            <h3>
                                <Link href="/single-blog">
                                    <a>10 tips to reduce your card processing costs</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                            <Link href="/single-blog">
                                <a className="btn btn-primary">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog post six */}
                <div className="col-lg-6 col-md-6">
                    <div className="single-blog-post">
                        <div className="blog">
                            <Link href="/single-blog">
                                <a>
                                    <img src="/images/blog/blog6.jpg" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="blog-post-content">
                            <ul className="entry-meta">
                                <li>
                                    <i className="far fa-user"></i>
                                    <Link href="/blog-two#">
                                        <a>Admin</a>
                                    </Link>
                                </li>
                                <li>
                                    <i className="far fa-calendar"></i>
                                    December 19, 2019
                                </li>
                            </ul>

                            <h3>
                                <Link href="/single-blog">
                                    <a>The PayPal here card reader review 2020</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                            <Link href="/single-blog">
                                <a className="btn btn-primary">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
                    
                {/* Pagination */}
                <div className="col-lg-12 col-md-12">
                    <div className="pagination-area">
                        <Link href="/blog-two#">
                            <a className="prev page-numbers">
                                <i className="fas fa-angle-double-left"></i>
                            </a>
                        </Link>
                        <Link href="/blog-two#">
                            <a className="page-numbers">1</a>
                        </Link>
                        <span className="page-numbers current" aria-current="page">2</span>
                        <Link href="/blog-two#">
                            <a className="page-numbers">3</a>
                        </Link>
                        <Link href="/blog-two#">
                            <a className="page-numbers">4</a>
                        </Link>
                        <Link href="/blog-two#">
                            <a className="next page-numbers">
                                <i className="fas fa-angle-double-right"></i>
                            </a>
                        </Link>
                    </div>
                </div>         
            </div>
        );
    }
}

export default BlogCard;
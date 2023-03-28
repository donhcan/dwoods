import React, { Component } from 'react';
import Link from 'next/link';



class AppDownloadContent extends Component {
    render() {
        return (
           // style={{backgroundImage:`url('/images/page-title-bg2.jpg')`}}
            <div className="app-download-area item-bg3" >
            
                <div className="container" >
                    <div className="row align-items-center" >
                        <div className="col-lg-6 col-md-12">
                        
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-download-content">
                                <h2>Employee Driven</h2>
                                <p>When we say that we are an employee driven firm, we mean it. We frequently ask for feedback from our employees, ensuring that every employee’s voice matters and is heard. The input that we get from employees through venues such as surveys, town hall meetings, and small group discussions helps to shape the future direction of our firm.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppDownloadContent;
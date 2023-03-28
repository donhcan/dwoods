import React, { Component } from 'react';

import feedback from "../constants/feedback.json";


class FeedbackList extends Component {
    render() {
        return (
            <React.Fragment>
          
      <div className="feedback">
      <div id="pull-quote">
<div className="pull-quote white show-logo">
<div className="pull-quote-inn fw">
<div className="quote-wrap">
<blockquote>{feedback[0].content}<br/>"</blockquote>

</div>
<div className="quote-logo"><img src="/images/logo1.png"/>
<h6><strong>{feedback[0].name}</strong></h6>
<h6>{feedback[0].job}</h6>
</div>
</div>
</div>
</div>
<div id="pull-quote-2"> <div className="pull-quote blue show-logo">
<div className="pull-quote-inn fw">
<div className="quote-wrap">
<blockquote>{feedback[1].content} <br/>"</blockquote>

</div>
<div className="quote-logo"><img src="/images/logo2.jpg"  />
<h6><strong>{feedback[1].name}</strong></h6>
<h6>{feedback[1].job}</h6>
</div>
</div>
</div>
</div>

<div id="pull-quote-3"> <div className="pull-quote white show-logo">
<div className="pull-quote-inn fw">
<div className="quote-wrap">
<blockquote>{feedback[2].content}<br/>"</blockquote>
</div>
<div className="quote-logo">
    <img src="/images/logo4.jpg" />
    <h6><strong>{feedback[2].name}</strong></h6>
    <h6>{feedback[2 ].job}</h6>
</div>
</div>
</div>
</div>

<div id="pull-quote-4"> <div className="pull-quote blue show-logo">
<div className="pull-quote-inn fw">
<div className="quote-wrap">
<blockquote>{feedback[3].content}<br/>"</blockquote>
</div>
<div className="quote-logo">
    <img src="/images/logo2.jpg"  />
    <h6><strong>{feedback[3].name}</strong></h6>
<h6>{feedback[3].job}</h6>
</div>
</div>
</div>
</div>
</div>

            </React.Fragment>
        );
    }
}

export default FeedbackList;
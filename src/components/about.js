import React, { Component } from 'react';
import { render } from 'react-dom';

class About extends Component {

  render() {
    return (
        <section className="tripit_header tripit_home_header bg-concur-blue">

            <div className="container tripit_header_2">
                <div id="header_content" className="col-md-12 col-lg-12 top-spacing">
                    <div className="col-md-6">
                        <div className="phone-image">
                            <img src="http://assets.concur.com/tripit/img-hero-phone.png" className="hidden-xs hidden-sm" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="t-center">
                            <h1 className="text-white">All your travel plans, in one place</h1>
                            <h2 className="text-white xxsm prox-basic font-weight-300">Get a master itinerary for every trip. Download TripIt today. </h2>
                            <div className="header-buttons">
                                <span><img src="https://assets.concur.com/images/us/btn-appstore.png" /></span>
                                <span><img src="https://assets.concur.com/images/us/btn-googleplay.png" /></span>                    
                            </div>
                        </div>
                    </div>            
                </div>
            </div>

        </section>
    );
  }
}

export default About;
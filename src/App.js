import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

class Home extends Component {
  render() {
    return (
              <section className="sicu_header sicu_home_header bg-concur-blue">

            <div className="container sicu_header_2">
                <div id="header_content" className="col-md-12 col-lg-12 top-spacing">
                    <div className="col-md-6">
                        <div className="t-center">
                            <h1 className="">My SICU</h1>
                            <h2 className="">A place where learning is actually fun </h2>
                            <div className="header-buttons">
                                <span><img src="https://assets.concur.com/images/us/btn-appstore.png" /></span>
                                <span><img src="https://assets.concur.com/images/us/btn-googleplay.png" /></span>                    
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="phone-image">
                            <img src="http://assets.concur.com/tripit/img-hero-phone.png" className="hidden-xs hidden-sm" />
                        </div>
                    </div>            
                </div>
            </div>

        </section>
    );
  }
}

export default Home;

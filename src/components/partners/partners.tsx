import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './partners.scss';

// const weAreSikhsLogo = require('../../../public/images/we-are-sikhs-logo.png');
// const sikhNetLogo = require('../../../public/images/sikhnet-logo.png');
// const sikhCoalitionLogo = require('../../../public/images/the-sikh-coalition-logo.png');
// const khalsaAidLogo = require('../../../public/images/khalsa-aid-logo.png');
// const kaurFoundationLogo = require('../../../public/images/kaur-foundation-logo.png');

export default class Partners extends React.Component {
    render() {
        return (
            <div className="partners-section-container">
                <span className="section-anchor" id="partners"></span>
                <section className="partners-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>SPONSORS</h2>
                                    <div className="divider">
                                        ∎
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-content">
                                    <div className="row">
                                        ...
                                        {/* <div className="col-sm-4 text-center">
                                            <img className="img-fluid float-right" src={weAreSikhsLogo}  />
                                        </div>
                                        <div className="col-sm-2 text-center">
                                            <img className="img-fluid" src={sikhNetLogo} />
                                        </div>
                                        <div className="col-sm-6 text-center">
                                            <img className="img-fluid float-left" src={sikhCoalitionLogo}  />
                                        </div> */}
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-sm-7 text-center">
                                            <img className="img-fluid float-right" src={khalsaAidLogo}  />
                                        </div>
                                        <div className="col-sm-5 text-center">
                                            <img className="img-fluid float-left" src={kaurFoundationLogo}  />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

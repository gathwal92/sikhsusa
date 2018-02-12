import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './about.scss';
import './timeline.scss';

const sikhUSALogo = require('../../../public/images/logo2.png');
const sikhPacLogo = require('../../../public/images/sikhspac.png');
const sikhAidLogo = require('../../../public/images/sikhsaid.png');
const sikhFoundationLogo = require('../../../public/images/sikhsfoundation.png');
const sikhMediaLogo = require('../../../public/images/sikhsmedia.png');
const sikhChamberLogo = require('../../../public/images/sikhschamber.png');

export default class About extends React.Component {
    render() {
        return (
            <div className="about-section-container">
                <span className="section-anchor" id="about"></span>
                <section className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>ABOUT</h2>
                                    <div className="divider">
                                        ∎
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-content">

                                    <img className="sikhusa-logo" src={sikhUSALogo} />
                                    <div className="sikhusa-description">
                                        A platform for about 1 millions Sikhs across America  building a bridge from the Sikh community to Americans of all faiths and cultures by engaging, encouraging, educating and empowering with five avenues that give valued voice and financial strength to promote understanding, cooperation and selfless service to our fellow citizens, communities and nation through love, compassion.
                                    </div>

                                    <ul className="timeline">

                                        <li>
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <Link to="/sikhspac">
                                                        <img className="sikhpac-logo img-fluid" src={sikhPacLogo} />
                                                    </Link>
                                                </div>
                                                {/* <div className="tl-subheading">
                                                    "Valued Voice"
                                                </div> */}
                                                <div className="tl-body">
                                                    <p>
                                                    Supporting candidates across party lines who provide a valued political voice for diversity and humanity at the local, state and federal levels across the United States.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="timeline-inverted">
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <img className="sikhsfoundation-logo img-fluid" src={sikhFoundationLogo} />
                                                </div>
                                                {/* <div className="tl-subheading">
                                                    "Faithfully Forward"
                                                </div> */}
                                                <div className="tl-body">
                                                    <p>
                                                    Engaging, educating and empowering people of all cultures and faiths by granting scholarships through writing and storytelling competitions that promote Sikh history, culture and values in the United States.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <img className="sikhsaid-logo img-fluid" src={sikhAidLogo} />
                                                </div>
                                                {/* <div className="tl-subheading">
                                                    "Selfless Service"
                                                </div> */}
                                                <div className="tl-body">
                                                    <p>
                                                    Providing selfless service to humanity, by providing food, shelter and necessities to those in need during national disasters and everyday life.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="timeline-inverted">
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <img className="sikhschamber-logo img-fluid" src={sikhChamberLogo} />
                                                </div>
                                                {/* <div className="tl-subheading">
                                                    "Become Better"
                                                </div> */}
                                                <div className="tl-body">
                                                    <p>
                                                    Offering resources and a podium for a strong and collaborative voice and business acumen within the Sikh communities and its allies.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <img className="sikhsmedia-logo img-fluid" src={sikhMediaLogo} />
                                                </div>
                                                {/* <div className="tl-subheading">
                                                    "Sharing Stories"
                                                </div> */}
                                                <div className="tl-body">
                                                    <p>
                                                    Introducing the Sikh-American history, culture and community through TV, film and new media by sharing stories that demonstrate how we are all connected by experiences.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

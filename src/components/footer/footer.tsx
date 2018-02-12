import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './footer.scss';

const logo = require('../../../public/images/logo-white.png');

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row vertical-align">
                        <div className="col-md-4 text-center">
                            <img className="footer-logo" src={logo} />
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="footer-mid-section">
                                <p>
                                    <a href="mailto:info@sikhspac.com">info@sikhspac.com</a>
                                </p>
                                <p>
                                    ©  2017. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center footer-social-icons">
                            <a href="https://www.facebook.com/SikhsPAC" target="_blank"><i className="fa fa-2x fa-facebook"></i></a>
                            <a href="https://twitter.com/KhalsaUSA" target="_blank"><i className="fa fa-2x fa-twitter"></i></a>
                            <a href="https://www.instagram.com/khalsakhalsausa/" target="_blank"><i className="fa fa-2x fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/22287972/" target="_blank"><i className="fa fa-2x fa-linkedin"></i></a>
                            <a href="https://www.youtube.com/channel/UCM6tCDMBbHpw31nGrwZBzhg/videos" target="_blank"><i className="fa fa-2x fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

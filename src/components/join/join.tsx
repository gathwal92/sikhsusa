import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './join.scss';

export default class Join extends React.Component {

    openPopup() {
        window['L'].start({"baseUrl":"mc.us17.list-manage.com","uuid":"4d36a38edfd8e31588c2461c0","lid":"102785071c"});
        document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }

    render() {
        return (
            <div className="join-section-container">
                <span className="section-anchor" id="join"></span>
                <section className="join-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>JOIN US</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-content">
                                    <p>
                                        Subscribe to our newsletter and stay connected.
                                    </p>
                                    <div className="subscribe-form">
                                        {/* <div className="input-container">
                                            <input id="email" placeholder="Enter your email here" />
                                        </div> */}
                                        <a className="btn" onClick={this.openPopup}>SUBSCRIBE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

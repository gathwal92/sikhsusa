import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './media.scss';

export default class Media extends React.Component {
    render() {
        return (
            <div className="media-section-container">
                <span className="section-anchor" id="media"></span>
                <section className="media-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>MEDIA</h2>
                                    <div className="divider">
                                        ∎
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center" >
                                <div className="section-content">

                                    <div className="fb-page"
                                        data-href="https://www.facebook.com/SikhsPAC"
                                        data-tabs="timeline"
                                        data-small-header="true"
                                        data-adapt-container-width="true"
                                        data-hide-cover="true"
                                        data-show-facepile="false">
                                            <blockquote cite="https://www.facebook.com/SikhsPAC/"
                                            className="fb-xfbml-parse-ignore">
                                                <a href="https://www.facebook.com/SikhsPAC/">SikhsPAC</a>
                                            </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-center" >
                                <div className="section-content">

                                    <div className="twitter-feed" >
                                    <a className="twitter-timeline" href="https://twitter.com/KhalsaUSA" data-tweet-limit="3">
                                    Tweets by SikhsUSA
                                     </a>
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

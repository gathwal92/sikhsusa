import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './news.scss';

const newsThumb = require('../../../public/images/news-thumb-1.png');

export default class News extends React.Component {
    render() {
        return (
            <div className="news-section-container">
                <span className="section-anchor" id="news"></span>
                <section className="news-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>LATEST NEWS</h2>
                                    <div className="divider">
                                        ∎
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-content">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h3 className="news-title">
                                                        Indiana Daily Student Explores Sikh Identity in Indiana
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <p className="news-date">
                                                        Sept 27, 2017
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <img className="news-thumbnail img-fluid" src={newsThumb} />
                                                </div>
                                                <div className="col-sm-7">
                                                    <p className="news-description">
                                                        Gurinder Singh Khalsa was not surprised. His dark skin, long beard and turbaned head have often been mistaken as symbols of Arabic culture, which is what Ohio members of the Donald Trump campaign assumed when they put a picture of him on a flyer advertising Muslims who support Trump...
                                                        <br /><br />
                                                        {/* Read more... */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h3 className="news-title">
                                                        Indiana Set to Become Second US State to Teach Sikh History and Culture
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <p className="news-date">
                                                        Sept 27, 2017
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="news-description">
                                                        Indiana is set to become the second state in the United States to include Sikh history and culture into the public school curriculum. Indiana Superintendent Glenda Ritz announced the plan at a SikhsPAC townhall meeting in Indianapolis, Ind. on Sunday. The initiative targets three major entry points, including 7th grade world history (Asia, Africa and the Middle East), high school world history and elective high school world religions. “When (SihksPAC Chairman) Gurinder Singh Khalsa came and spoke with me, he had some…
                                                        <br /><br />
                                                        {/* Read more... */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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

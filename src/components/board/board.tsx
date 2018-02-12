import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './board.scss';

const khalsaPic = require('../../../public/images/khalsa-pic.jpg');
const bahadurPic = require('../../../public/images/bahadur-pic.jpg')
const bijenderKumarPic = require('../../../public/images/bijender-kumar.jpeg')
const defaultPic = require('../../../public/images/default-avatar.jpg');

export default class Board extends React.Component {
    render() {
        return (
            <div className="board-section-container">
                <span className="section-anchor" id="contribute"></span>
                <section className="board-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>LEADERSHIP</h2>
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
                                        <div className="col-sm-4">
                                            <div className="person-image">
                                                <img className="img-fluid" src={khalsaPic} />
                                            </div>
                                            <div className="person-name">
                                                Gurinder Singh
                                            </div>
                                            <div className="person-title">
                                                Founder & Chairman
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="person-image">
                                                <img className="img-fluid" src={bahadurPic} />
                                            </div>
                                            <div className="person-name">
                                                Bahadur Singh
                                            </div>
                                            <div className="person-title">
                                                Co-Founder & Vice Chairman
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="person-image">
                                                <img className="img-fluid" src={bijenderKumarPic} />
                                            </div>
                                            <div className="person-name">
                                                Bijender Kumar MD
                                            </div>
                                            <div className="person-title">
                                                Co-Founder
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

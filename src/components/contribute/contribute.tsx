import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './contribute.scss';

export default class Contribute extends React.Component {
    render() {
        return (
            <div className="contribute-section-container">
                <span className="section-anchor" id="contribute"></span>
                <section className="contribute-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>CONTRIBUTE TO SIKHSUSA</h2>
                                    <div className="divider">
                                        ∎
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-content">
                                    <p>
                                        Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit.
                                    </p>
                                    <br />
                                    <p>
                                        <Link className="btn" to="/donate">Donate</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

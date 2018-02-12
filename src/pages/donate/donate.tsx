import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './donate.scss';

import Nav from '../../components/nav/nav';
import DonateForm from '../../components/donateForm/donateForm';
import Footer from '../../components/footer/footer';
import Watermark from '../../components/watermark/watermark';

export default class Donate extends React.Component {
    render() {
        return (
            <div className="root-inner">

                <Nav isHomePage={false} />

                <div className="donate-section-container">
                    <section className="donate-section">
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
                                <div className="col-lg-12">
                                    <DonateForm />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
                <Watermark />

            </div>
        )
    }
}

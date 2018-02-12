import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './events.scss';

export default class Events extends React.Component {
    render() {
        return (
            <div className="events-section-container">
                <span className="section-anchor" id="events"></span>
                <section className="events-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>EVENTS</h2>
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
                                        <div className="col-sm-2 col-xs-3 text-center">
                                            <div className="event-date">
                                                NOV <br/>5
                                            </div>
                                        </div>
                                        <div className="col-sm-10 col-xs-9">
                                            <h3 className="event-title">
                                                Yuba City Nagar Kirtan
                                            </h3>
                                            <p className="event-subtitle">
                                                Sun 6:00–19:00 PST · 2468 Tierra Buena Rd, Yuba City, California 95993
                                            </p>
                                            <p className="event-description">
                                                The Yuba City Annual Sikh Parade is a Nagar Kirtan commemorating the Gur Gaddee, or the inauguration day of Siri Guru Granth Sahib, as the everlasting guru of the Sikhs.
                                                <br/>
                                                More info: <a href="https://www.facebook.com/events/940069679477721/" target="_blank">https://www.facebook.com/events/940069679477721/</a>
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-sm-2 col-xs-3 text-center">
                                            <div className="event-date">
                                                Sept 27
                                            </div>
                                        </div>
                                        <div className="col-sm-10 col-xs-9">
                                            <h3 className="event-title">
                                                Random Event Name
                                            </h3>
                                            <p className="event-subtitle">
                                                Sat 7pm EST · Random Place · Indianapolis
                                            </p>
                                            <p className="event-description">
                                                Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2 col-xs-3 text-center">
                                            <div className="event-date">
                                                Sept 27
                                            </div>
                                        </div>
                                        <div className="col-sm-10 col-xs-9">
                                            <h3 className="event-title">
                                                Random Event Name
                                            </h3>
                                            <p className="event-subtitle">
                                                Sat 7pm EST · Random Place · Indianapolis
                                            </p>
                                            <p className="event-description">
                                                Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2 col-xs-3 text-center">
                                            <div className="event-date">
                                                Sept 27
                                            </div>
                                        </div>
                                        <div className="col-sm-10 col-xs-9">
                                            <h3 className="event-title">
                                                Random Event Name
                                            </h3>
                                            <p className="event-subtitle">
                                                Sat 7pm EST · Random Place · Indianapolis
                                            </p>
                                            <p className="event-description">
                                                Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid.
                                            </p>
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

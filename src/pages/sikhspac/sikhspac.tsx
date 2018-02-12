import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './sikhspac.scss';

import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import Watermark from '../../components/watermark/watermark';

const sikhPacLogo = require('../../../public/images/sikhspac.png');

export default class SikhsPAC extends React.Component<any, any> {
    render() {
        return (
            <div className="root-inner">

                <Nav isHomePage={false} />

                <div className="sikhspac-section-container">
                    <section className="sikhspac-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="section-heading">
                                        <img className="sikhpac-logo img-fluid" src={sikhPacLogo} />
                                        <div className="divider">
                                            ∎
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Political Voice of Sikhs</h3>
                                    <div>
                                        Sikh culture calls for selfless service to community and nation. SikhsPAC exists to provide the resources needed to enable this service through support for local, state and national candidates for public office. From the smallest town halls to the Oval Office, SikhsPAC aims to spread core values of equality and justice for all.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>A Voice for Humanity & Diversity</h3>
                                    <div>
                                        Sikhism embraces teachings from all religions and cultures. In a world divided by sectarian discord, SikhsPAC seeks to promote understanding and cooperation among Americans of all cultures including Sikhs, Christians, Muslims, Buddhist and Hindus. All life on earth is sacred from the poorest child to the most successful businessman. Sikhism is devoted to justice and service to all, regardless of class or creed. SikhsPAC supports efforts to promote these values within the United States and across the globe.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>A Voice for Interfaith & Economic Development</h3>
                                    <div>
                                        Sikhs represent the fastest growing business community in Indiana and the United States. More than 7,000 Indiana Sikhs own over 3,000 businesses in Indiana. Many of these individuals maintain strong ties with major industry leaders in India. Sikhs are also pioneers of interfaith dialogue. The Guru Granth Sahib or Sikh holy book contains writings and wisdom from many religious and cultural traditions. These teachings promote a strong sense of respect for all faiths and cultures.
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>To raise awareness of Sikh culture, identities and values</h3>
                                    <div>
                                        At its core, SikhsPAC is an organization dedicated to translating the values of Sikh culture into the political arena though contributions to Sikh-minded candidates and educational programming aimed at informing the public of Sikh’s unique role in American history.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>To pave the way for Sikh involvement in American politics</h3>
                                    <div>
                                        Selfless service to nation and community are important values in Sikh tradition. SikhsPAC exists to enable this service through contributions to Sikh candidates for public office at the local, state and national levels.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>To prepare Sikh youth for a future in public office</h3>
                                    <div>
                                        SikhsPAC supports future leaders by providing educational opportunities to Sikh youth interested in engaging with the political process through internships and outreach programming.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>To ensure Sikh history and culture in public education</h3>
                                    <div>
                                        For more than a century, Sikhs have been an important part of the fabric of American life. SikhsPAC will ensure these contributions remain at the forefront of the American psyche through efforts to bring Sikh history into public schools.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>To promote diversity through interfaith dialogue</h3>
                                    <div>
                                        Sikh culture has always valued the world’s diverse religious traditions. SikhsPAC will be an advocate for interfaith dialogue between members of all faiths and cultures.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Why join SikhsPAC</h3>
                                    <div>
                                        The Sikh community has been quietly contributing to the fabric of American life for more than a century. From serving in the military to working on the construction of the first transcontinental railroads, Sikhs have been at the foundation of many great American endeavors.
                                        <br/>Help this group grow and prosper through membership in SikhsPAC.
                                        <br/>SikhsPAC is a nonpartisan political action committee devoted to support for candidates who follow Sikh values of honesty, service, compassion, humility and reverence in their daily lives.
                                        <br/>Funds contributed to this organization will be used to support Sikh and Sikh-minded candidates at the local, state and national levels. These funds will also be used to finance outreach program exploring Sikhism’s rich American heritage and promoting understanding and peace among members of all faiths.
                                        <br/>So make your donation today and become a member of SikhsPAC, the first political action committee in American history devoted to the interests of Sikhs living in the United States.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

                <Footer />
                <Watermark />

            </div>
        );
    }
}

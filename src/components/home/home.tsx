import * as React from 'react';
import * as ReactDom from 'react-dom';
import './home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-section-container">
                <span className="home-section-anchor" id="home"></span>
                <div className="home-section">

                    <div className="video-container">
                        <div className="video-overlay"></div>
                        <iframe frameBorder="0" allowFullScreen width="1920" height="1080"
                            src="https://www.youtube.com/embed/SRxBcDjrux8?modestbranding=1&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&html5=1&iv_load_policy=3&playlist=SRxBcDjrux8">
                        </iframe>
                    </div>

                    <div className="home-content">
                        <p className="headline">
                            Welcome to SikhsUSA
                        </p>
                        <div className="divider">
                            ∎
                        </div>
                        <p>
                            A Voice for Interfaith & Economic Development
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

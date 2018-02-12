import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './main.scss';

import Nav from '../../components/nav/nav';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import Media from '../../components/media/media';
import Events from '../../components/events/events';
import News from '../../components/news/news';
import Board from '../../components/board/board';
import Contribute from '../../components/contribute/contribute';
import Join from '../../components/join/join';
import Partners from '../../components/partners/partners';
import Footer from '../../components/footer/footer';
import Watermark from '../../components/watermark/watermark';


export default class Main extends React.Component<any, any> {
    render() {
        return (
            <div className="root-inner">
                <Nav isHomePage={true} />
                <Home />
                <About />
                <Media />
                <Events />
                <News />
                <Board />
                <Contribute />
                <Join />
                <Partners />
                <Footer />
                <Watermark />
            </div>
        );
    }
}

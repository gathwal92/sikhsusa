import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import './app.scss';

require('../public/images/favicon.ico');

import Main from './pages/main/main';
import Donate from './pages/donate/donate';
import SikhsPAC from './pages/sikhspac/sikhspac';

export default class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route path='/donate' component={Donate}/>
                        <Route path='/sikhspac' component={SikhsPAC}/>
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

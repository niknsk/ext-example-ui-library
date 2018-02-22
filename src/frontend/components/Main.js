// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, React } from '@plesk/ui-library';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import { getRouteUrl } from '../helpers/url';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path={getRouteUrl('/')} component={Home}/>
                    <Route path={getRouteUrl('/about')} component={About}/>
                    <Route path="*" component={NotFound} />
                </Switch>
            </main>
        );
    }
}

export default Main;

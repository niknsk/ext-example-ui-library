// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, React } from '@plesk/ui-library';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import DesktopContainer from "../containers/DesktopContainer";
import SettingsContainer from "../containers/SettingsContainer";
import { getRouteUrl } from '../helpers/url';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={DesktopContainer}/>
                    <Route exact path={getRouteUrl('/')} component={DesktopContainer}/>
                    <Route path={getRouteUrl('/settings')} component={SettingsContainer}/>
                    <Route path="*" component={NotFound} />
                </Switch>
            </main>
        );
    }
}

export default Main;

// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, React } from '@plesk/ui-library';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import { getRouteUrl } from '../helpers/url';
import DesctopContainer from "../containers/DesctopContainer";
import SettingsContainer from "../containers/SettingsContainer";

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={DesctopContainer}/>
                    <Route exact path={getRouteUrl('/')} component={DesctopContainer}/>
                    <Route path={getRouteUrl('/settings')} component={SettingsContainer}/>
                    <Route path="*" component={NotFound} />
                </Switch>
            </main>
        );
    }
}

export default Main;

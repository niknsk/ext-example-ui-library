// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, React } from '@plesk/ui-library';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { getBaseName } from '../helpers/url';

class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={getBaseName()}>
                <App />
            </BrowserRouter>
        );
    }
}

export default Root;

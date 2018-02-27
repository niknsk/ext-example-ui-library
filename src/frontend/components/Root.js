// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, LocaleProvider, React } from '@plesk/ui-library';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import locale from '../l10n/en';
import { getBaseName } from '../helpers/url';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <LocaleProvider messages={locale}>
                    <BrowserRouter basename={getBaseName()}>
                        <App />
                    </BrowserRouter>
                </LocaleProvider>
            </Provider>
        );
    }
}

export default Root;

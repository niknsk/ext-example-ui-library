// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { render, createElement } from '@plesk/ui-library';
import App from './components/App';

module.exports = props => {
    const container = document.createElement('div');
    const main = document.getElementById('main');
    main.insertBefore(container, main.firstChild);

    render((
        <App {...props} />
    ), container);
};

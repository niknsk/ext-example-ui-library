// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { render, createElement, Reat } from '@plesk/ui-library';
import Root from './components/Root';

module.exports = props => {
    const container = document.createElement('div');
    const main = document.getElementById('main');
    main.insertBefore(container, main.firstChild);

    render(
        <Root {...props} />,
        container
    );
};

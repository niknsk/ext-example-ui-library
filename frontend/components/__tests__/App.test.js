// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement } from '@plesk/ui-library';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <App date="2017-08-16 12:06:57" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

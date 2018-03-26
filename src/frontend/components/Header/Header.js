// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, React, Translate } from '@plesk/ui-library';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {getRouteUrl} from "../../helpers/url";
import { CLS_PREFIX } from '../../constants';

import './Header.less';

class Header extends Component {
    render() {
        return (
            <header>
                <h2><Translate content="exampleUiLibrary" /></h2>
                <nav>
                    <ul className={`${this.props.baseClassName}__navbar`}>
                        <li><NavLink to={getRouteUrl('/')}><Translate content="desktop" /></NavLink></li>
                        <li><NavLink to={getRouteUrl('/settings')}><Translate content="settings" /></NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    baseClassName: PropTypes.string
};

Header.defaultProps = {
    baseClassName: `${CLS_PREFIX}header`,
};

export default Header;

// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, React } from '@plesk/ui-library';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {getRouteUrl} from "../../helpers/url";
import { CLS_PREFIX } from '../../constants';

import './Header.less';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className={`${this.props.baseClassName}__navbar`}>
                        <li><Link to={getRouteUrl('/')}>Home</Link></li>
                        <li><Link to={getRouteUrl('/about')}>About</Link></li>
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

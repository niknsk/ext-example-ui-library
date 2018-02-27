// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import PropTypes from 'prop-types';
import { createElement, Component, React, Alert, Icon, Translate } from '@plesk/ui-library';
import { BeatLoader } from 'react-spinners';
import { CLS_PREFIX, LOADER_COLOR, NO_IMAGE_AVAILABLE } from '../../constants';
import { getResourceUrl } from '../../helpers/url';

import './Desctop.less';

class Desctop extends Component {
    componentDidMount() {
        this.props.loadSettings();
    }

    render() {
        const { settings, isLoading } = this.props;

        const backgroundImage = settings && settings.backgroundImage
            ? settings.backgroundImage
            : NO_IMAGE_AVAILABLE;

        let content = (
            <div>
                <Alert intent="info">
                    <Icon name="i-circle-exclamation-mark" />
                    <Translate content="changeDesctopBackgroundImageMessage" />
                </Alert>
                <Icon src={getResourceUrl(`/images/${backgroundImage}`)} className={`${this.props.baseClassName}__background-image`} />
            </div>
        );

        if (isLoading) {
            content = (
                <div className="global-loading">
                    <BeatLoader
                        color={LOADER_COLOR}
                        loading
                    />
                </div>
            );
        }

        return content;
    }
}

Desctop.propTypes = {
    settings: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loadSettings: PropTypes.func.isRequired,
    baseClassName: PropTypes.string.isRequired
};

Desctop.defaultProps = {
    baseClassName: `${CLS_PREFIX}desctop`
};

export default Desctop;

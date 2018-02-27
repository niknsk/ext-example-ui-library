// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import PropTypes from 'prop-types';
import { createElement, Component, React, Translate } from '@plesk/ui-library';
import { BeatLoader } from 'react-spinners';
import {CLS_PREFIX, LOADER_COLOR} from '../../constants';

const backgroundImages = [
    {text: 'No Image', value: 'noimage.jpeg'},
    {text: 'Image1', value: 'image1.jpeg'},
    {text: 'Image2', value: 'image2.jpeg'},
    {text: 'Image4', value: 'image3.jpeg'},
];

import './Settings.less';

class Settings extends Component {
    componentDidMount() {
        this.props.loadSettings();
    }

    render() {
        const { settings, isLoading } = this.props;

        let content = (
            <div>
                <label for="desktop-background-image" className={`${this.props.baseClassName}__desktop-background-image-label`}>
                    <Translate content="desktopBackgroundImage" />
                </label>
                <select id="desktop-background-image" value={settings.backgroundImage} onChange={e => this.props.saveSettings({backgroundImage: e.target.value})}>
                    {backgroundImages.map(backgroundImage => (
                        <option value={backgroundImage.value}>{backgroundImage.text}</option>
                    ))}
                </select>
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

Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loadSettings: PropTypes.func.isRequired,
    baseClassName: PropTypes.string.isRequired
};

Settings.defaultProps = {
    baseClassName: `${CLS_PREFIX}settings`
};

export default Settings;

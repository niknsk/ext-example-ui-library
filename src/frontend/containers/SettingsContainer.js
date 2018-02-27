// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loadSettingsIfNeeded, saveSettings} from '../actions';
import Settings from '../components/Settings/Settings';

const mapStateToProps = ({settings}) => {
    return {
        settings: settings.data,
        isLoading: settings.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadSettings: () => {
            dispatch(loadSettingsIfNeeded());
        },
        saveSettings: (settings) => {
            dispatch(saveSettings(settings));
        },
    };
};

const SettingsContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings));

export default SettingsContainer;

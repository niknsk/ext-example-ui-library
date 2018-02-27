// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadSettingsIfNeeded } from '../actions';
import Desktop from '../components/Desktop/Desktop';

const mapStateToProps = (state) => {
    const { settings } = state;
    return {
        settings: settings.data,
        isLoading: settings.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadSettings: () => {
            dispatch(loadSettingsIfNeeded())
        }
    }
};

const DesktopContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Desktop));

export default DesktopContainer

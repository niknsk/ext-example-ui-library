// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadSettingsIfNeeded } from '../actions';
import Desctop from '../components/Desctop/Desctop';

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

const DesctopContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Desctop));

export default DesctopContainer

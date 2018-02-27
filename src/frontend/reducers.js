// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { combineReducers } from 'redux';
import {
    INVALIDATE_SETTINGS,
    REQUEST_SETTINGS,
    RECEIVE_SETTINGS,
    UPDATE_SETTINGS
} from './actions';

const settings = function (
    state = {
        isFetching: false,
        didInvalidate: false,
        data: {}
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_SETTINGS:
            return Object.assign({}, state, {
                didInvalidate: true,
            });
        case REQUEST_SETTINGS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case RECEIVE_SETTINGS:
        case UPDATE_SETTINGS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: action.settings,
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    settings
});

export default rootReducer;

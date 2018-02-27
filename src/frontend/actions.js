// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import api from './services/api';
import { LOAD_SETTINGS, SAVE_SETTINGS } from './constants';

export const REQUEST_SETTINGS = 'REQUEST_SETTINGS';
export const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const INVALIDATE_SETTINGS = 'INVALIDATE_SETTINGS';

/**
 * @returns {{type: string}}
 */
export const requestSettings = () => {
    return {
        type: REQUEST_SETTINGS
    };
};

/**
 * @param settings
 * @returns {{type: string, settings: {}}}
 */
export const receiveSettings = (settings = {}) => {
    return {
        type: RECEIVE_SETTINGS,
        settings,
    };
};

/**
 * @param settings
 * @returns {{type: string, settings: {}}}
 */
export const updateSettings = (settings = {}) => {
    return {
        type: UPDATE_SETTINGS,
        settings,
    };
};

/**
 *
 * @param settings
 * @returns {function(*)}
 */
export const saveSettings = (settings = {}) => {
    return dispatch => {
        dispatch(updateSettings(settings));

        const data = new FormData();

        data.append('backgroundImage', settings.backgroundImage);

        return api.post(SAVE_SETTINGS, data);
    };
};

/**
 *
 * @returns {{type: string}}
 */
export const invalidateSettings = () => {
    return {
        type: INVALIDATE_SETTINGS
    };
};

/**
 * Should we load settings?
 *
 * @param state
 * @returns {boolean}
 */
const shouldLoadSettings = ({settings}) => {
    if (!settings
        || !settings.data
        || Object.getOwnPropertyNames(settings.data).length === 0
    ) {
        return true;
    } else if (settings.isFetching) {
        return false;
    }
    return settings.didInvalidate;
};

/**
 * Load settings if needed
 *
 * @returns {function(*, *)}
 */
export const loadSettingsIfNeeded = () => {
    return (dispatch, getState) => {
        if (shouldLoadSettings(getState())) {
            return dispatch(loadSettings());
        }

        return Promise.resolve();
    };
};

/**
 * Load settings
 *
 * @returns {function(*)}
 */
export const loadSettings = () => {
    return dispatch => {
        dispatch(requestSettings());

        return api.get(LOAD_SETTINGS)
            .then(({data: settings}) => {
                dispatch(receiveSettings(settings));
            })
    };
};

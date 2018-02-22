// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { BASE_SCRIPT, BASE_NAME } from '../constants';

export const getBaseName = () => {
    return BASE_NAME;
};

export const getRouteUrl = (url) => {
    return `/${BASE_SCRIPT}${url}`;
};

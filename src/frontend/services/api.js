// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { create } from 'apisauce';
import { BASE_URL } from '../constants';

const instance = () => (
    create({
        baseURL: BASE_URL,
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
    })
);

export default instance();

// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Alert } from '@plesk/ui-library';

const App = ({ date }) => (
    <Alert intent="info">
        Server time: {date}
    </Alert>
);

export default App;

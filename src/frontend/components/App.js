// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, React } from '@plesk/ui-library';
import Header from './Header/Header';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;

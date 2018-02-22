// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, React, Switch } from '@plesk/ui-library';
import api from '../services/api';
import { HOMEPAGE_DATA, HOMEPAGE_DISABLE_EXT } from '../constants';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideVersionLoading: true,
            data: {}
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        return api.get(HOMEPAGE_DATA, {})
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.data.message || 'Unknown error');
                }
                const { data } = response;
                this.setState({data});
            })
            .finally(() => {
                this.setState({hideVersionLoading: false});
            });
    }

    hideVersionAction(hideVersion) {
        this.setState(prevState => {
            let data = prevState.data;
            data.hideVersion = hideVersion;
            return {data};
        });

        const data = new FormData();
        data.append('hideVersion', hideVersion);

        return api.post(HOMEPAGE_DISABLE_EXT, data);
    }

    render() {
        return (
            <div>
                <h1>Welcome to extension example using PLesk UI Library!</h1>
                <Switch
                    loading={this.state.hideVersionLoading}
                    checked={this.state.data.hideVersion}
                    onChange={(checked) => (this.hideVersionAction)(checked)}
                >
                    Hide version
                </Switch>
            </div>
        );
    }
}

export default Home;

// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import { createElement, Component, React, Plaintext } from '@plesk/ui-library';

class About extends Component {
    render() {
        return (
            <div>
                <Plaintext>
                    {`
    This is an extension example using PLesk UI Library.
    version 1.0.0
`}
                </Plaintext>
            </div>
        );
    }
}

export default About;

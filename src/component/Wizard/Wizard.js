import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Wizard extends Component {



render() {
    return (
        <div>
            Wizard
            <Link to='/'>
                <button>Cancel</button>
            </Link>
        </div>
    )
}
}

export default Wizard;

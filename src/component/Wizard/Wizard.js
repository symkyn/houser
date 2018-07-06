import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Wizard extends Component {
    inputs = [
        {
            label: 'Name',
            property: 'name'
        },
        {
            label: 'Address',
            property: 'address'
        },
        {
            label: 'City',
            property: 'city'
        },
        {
            label: 'State',
            property: 'state'
        },
        {
            label: 'Zip Code',
            property: 'zipcode'
        }
    ]

    constructor(){
        super();
        
    this.state={
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: 0
    }
}


render() {
    const inputs = this.inputs
        .map((input, i) => (
            <div key={`new-house-form-${i}`}>
                <label>
                    {input.label}:
                    <input 
                        value={this.state[input.property]}
                        onChange={e => this.handleChange(e, input.property)}
                        name={input.property}
                    />
                </label>
            </div>
        ))
    return (
        <div>
            Wizard
            {inputs}
            <Link to='/'>
                <button>Cancel</button>
            </Link>
        </div>
    )
}

handleChange(e, name) {
    this.setState({ [name]: e.target.value});
}

}



export default Wizard;

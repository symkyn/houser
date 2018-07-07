import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class StepOne extends Component {
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
            property: 'zip'
        }
    ]

    constructor(){
        super();
        
    this.state={
        name: '',
        address: '',
        city: '',
        state: '',
        zip: 0
    }

}


render() {
    
    
    const inputs = this.inputs
        .map((input, i) => (
            <div key={`new-house-form-${i}`}>
                <label key={`new-house-form-${i}`}>
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
            
            <form onSubmit={(e) => {e.preventDefault}} >
                {inputs}
                <button>Next Step</button>
            </form>
            
        </div>
    )
}

handleChange(e, name) {
    this.setState({ [name]: e.target.value});
}
}

export default StepOne;
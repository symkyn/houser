import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

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
    this.handleSubmit = this.handleSubmit.bind(this);
}


render() {
    let {name, address, city, state, zip} = this.state;
    let newHome = {name, address, city, state, zip};
    
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
            Wizard
            
            <form onSubmit={(e) => {e.preventDefault; this.handleSubmit(e, newHome)}} >
                {inputs}
                <button>submit</button>
            </form>
            
            <Link to='/'>
                <button>Cancel</button>
            </Link>
        </div>
    )
}

handleChange(e, name) {
    this.setState({ [name]: e.target.value});
}

handleSubmit(e, newProperty) {
    axios.post('http://localhost:4000/api/newHouse', newProperty)
        .then(result => {
                this.setState({
                    imageurl: '',
                    name: '',
                    price: 0
                });
                <Redirect to='/' />
            })
            .catch(err => console.warn(err))
        
}

}



export default Wizard;

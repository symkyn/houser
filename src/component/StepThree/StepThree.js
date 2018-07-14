import React, { Component } from 'react';
import axios from 'axios';

import { Redirect, Link } from 'react-router-dom';

class StepThree extends Component {
    inputs = [
        {
            label: 'Monthly Mortgage Amount',
            property: 'amount'
        },
        {
            label: 'Desired Monthly Rent',
            property: 'rent'
        }
    ]

    constructor(){
        super();
        
    this.state={
        amount: '',
        rent: '',
        recommendedRent: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
            Recommended Rent: {this.state.recommendedRent}
            <form onSubmit={(e) => {e.preventDefault}} >
                {inputs}
                <Link to='/wizard/step2'><button>Previous Step</button></Link>-
                <button>Complete</button>
            </form>
            
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

export default StepThree;
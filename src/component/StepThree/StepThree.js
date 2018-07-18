import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import {connect} from 'react-redux';

import * as Actions from '../../ducks/reducer';

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

    constructor(props){
        super(props);
        
    this.state={
        amount: '',
        rent: '',
        recommendedRent: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    this.setState({
        amount: this.props.amount,
        rent: this.props.rent
    })
}

render() {
    const {updateStepThree} = this.props;

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
                <Link to='/wizard/step2'>
                    <button onClick={() => updateStepThree(this.state.amount, this.state.rent)}>
                        Previous Step
                    </button>
                </Link>--
                <button>Complete</button>
            </form>
            
        </div>
    )
}

handleChange(e, name) {
    this.setState({ [name]: e.target.value});
}

handleSubmit(e, newProperty) {
    axios.post('/api/newHouse', newProperty)
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

// function mapStateToProps( state ) {
//     const { name, address, city, usState, zip, url, amount, rent} = state;
//     return {
//         name,
//         address,
//         city,
//         usState,
//         zip,
//         url,
//         amount,
//         rent
//     };
// }



export default connect(state=>state, Actions)(StepThree);
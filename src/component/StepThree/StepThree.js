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
    const newProperty = { name: this.props.name,
                            address: this.props.address,
                            city: this.props.city,
                            usState: this.props.usState,
                            zip: this.props.zip,
                            img: this.props.url,
                            mortgage: this.state.amount,
                            rent: this.state.rent};
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
                <button onClick={(e) => this.handleSubmit(e, newProperty)}>Complete</button>
            </form>
            
        </div>
    )
}

handleChange(e, name) {
    this.setState({ [name]: e.target.value});
    let recommendedRent = this.state.amount * 1.25;
    this.setState({ recommendedRent: recommendedRent});
}

handleSubmit(e, newProperty) {
    console.log(newProperty);
    debugger
    axios.post('/api/newHouse', newProperty)
        .then(result => {
                this.props.cancelInputs();
                <Redirect to='/' />
            })
            .catch(err => console.warn(err))
        
}

}

export default connect(state=>state, Actions)(StepThree);
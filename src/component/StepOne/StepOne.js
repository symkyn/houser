import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateStepOne} from '../../ducks/reducer';

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
            property: 'usState'
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
        usState: '',
        zip: 0
    }

}


render() {
    // const { updateStepOne } = this.props;
    console.log(this.props);
    // console.log(this.state);
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
                {/* <Link to='/wizard/step2'> */}
                    <button onClick={() => updateStepOne(...this.state)}>Next Step</button>
                {/* </Link> */}
            </form>
            
        </div>
    )
}

handleChange(e, name) {
    this.setState({ [name]: e.target.value});
}
}

function mapStateToProps( state ) {
    const { name, address, city, usState, zip} = state;
    return {
        name,
        address,
        city,
        usState,
        zip
    };
}

export default connect(mapStateToProps, {updateStepOne})(StepOne);
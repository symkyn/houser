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

    constructor(props){
        super(props);
        
    this.state={
        name: '',
        address: '',
        city: '',
        usState: '',
        zip: 0
    }

}

componentDidMount() {
    this.setState({
        name: this.props.name,
        address: this.props.address,
        city: this.props.city,
        usState: this.props.usState,
        zip: this.props.zip
    })
}

render() {
    const { updateStepOne } = this.props;
   
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
                {inputs}
                <Link to='/wizard/step2'>
                    <button onClick={() => updateStepOne(this.state.name,
                                                            this.state.address,
                                                            this.state.city,
                                                            this.state.usState,
                                                            this.state.zip)}>Next Step</button>
                </Link>
            
            
        </div>
    )
}

handleChange(e, name) {
    this.setState({ [name]: e.target.value});
}
}

// function mapStateToProps( state ) {
//     const { name, address, city, usState, zip} = state;
//     return {
//         name,
//         address,
//         city,
//         usState,
//         zip
//     };
// }

export default connect(state=>state, {updateStepOne})(StepOne);
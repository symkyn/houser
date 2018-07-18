import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {updateStepTwo} from '../../ducks/reducer';

class StepTwo extends Component {
        constructor(props){
        super(props);
        
    this.state={
        url: ''
    }

}


render() {
    const { updateStepTwo } = this.props;    
    
    return (
        <div>
            <label >
                    Image URL
                    <input 
                        value={this.state.url}
                        onChange={e => this.handleChange(e)}
                        name='url'
                    />
            </label>
            <Link to='/wizard/step1'><button>Previous Step</button></Link>
            <Link to='/wizard/step3'><button>Next Step</button></Link>
        </div>
    )
}

handleChange(e) {
    this.setState({ url: e.target.value });
}
}

function mapStateToProps( state ) {
        const { url } = state;
        return {
            url
        };
    }

export default connect(mapStateToProps, {})(StepTwo);
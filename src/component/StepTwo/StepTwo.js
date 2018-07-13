import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class StepTwo extends Component {
        constructor(){
        super();
        
    this.state={
        url: ''
    }

}


render() {
        
    
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

export default StepTwo;
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
            <button>Previous Step</button>
            <button>Next Step</button>
        </div>
    )
}

handleChange(e) {
    this.setState({ url: e.target.value });
}
}

export default StepTwo;
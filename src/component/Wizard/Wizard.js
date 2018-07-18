import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';

import * as Actions from '../../ducks/reducer';

class Wizard extends Component {
    

    // constructor(){
    //     super();
        
    // this.state={
    //     name: '',
    //     address: '',
    //     city: '',
    //     state: '',
    //     zip: 0
    // }
    
// }


render() {
   const {cancelInputs} = this.props;
    return (
        <div>
            Wizard
            <Link to='/'>
                <button onClick={()=> cancelInputs()}>Cancel</button>
            </Link>
            
            <Switch>
                <Route path='/wizard/step1' component={StepOne} />
                <Route path='/wizard/step2' component={StepTwo} />
                <Route path='/wizard/step3' component={StepThree} />
            </Switch>
            
        </div>
    )
}

}



export default connect(state=>state, Actions)(Wizard);

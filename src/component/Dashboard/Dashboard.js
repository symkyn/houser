import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Dashboard.css';

class Dashboard extends Component {
constructor() {    
    super()

    this.state={
        houses: []
    }
}

componentDidMount() {
    axios.get('/api/houseList')
        .then(results => {
            console.log(results.data)
            this.setState({
                houses: results.data
            })
        })
        .catch(err => console.warn(err))
}

render(){
    const houseList = this.state.houses.map((c, i) => 
        {
           return(
                <House  deleteProperty = {(id) => this.handleDelete(id)}  key={`house ${i}`} 
                    home={c} 
                />
           )
        })

    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <Link to='/wizard/step1'>
                <button>Add New Property</button>
            </Link>
            {houseList}
        </div>
    )
}

handleDelete(id) {
    axios.delete(`/api/delete/${id}`)
        .then(this.componentDidMount())
        .catch(err => console.warn(err))
} 

}

export default Dashboard;
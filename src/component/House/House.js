import React from 'react';
import './House.css';

export default function House(props) {
    return(
        <div className="homeBox">
            <div className="photo"><img src={props.home.img} alt='home' /></div>
            Property Name: {props.home.name}
            <br />
            Address: {props.home.address}
            <br />
            City: {props.home.city} 
            State: {props.home.state} 
            Zip: {props.home.zip}
            <br />
            <div className="rentInfo">
            Monthly Mortgage: {props.home.mortgage} ||
            Desired Rent: {props.home.rent}
            </div>
            <button onClick={(e) => {e.preventDefault(); props.deleteProperty(props.home.id)}}>Delete</button>
        </div>
    )
}
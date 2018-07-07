import React from 'react';
import './House.css';

export default function House(props) {
    return(
        <div className="homeBox">
            {props.home.name}
            <br />
            {props.home.address}
            <br />
            {props.home.city}, {props.home.state} {props.home.zip}
            <br />
            <button onClick={(e) => {e.preventDefault(); props.deleteProperty(props.home.id)}}>Delete</button>
        </div>
    )
}
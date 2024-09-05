import './App.css';
import React, { useState } from "react";
import "./Tag.css";


const TicketComponent = (props) => {

    return(
        <button className='tag' > {props.name} </button>
    )
}

export default TicketComponent;

import './App.css';
import React, { useState } from "react";
import "./Tag.css";


const TagComponent = (props) => {

    return(
        <button className='tag' > {props.name} </button>
    )
}

export default TagComponent;

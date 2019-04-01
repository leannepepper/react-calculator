import React from 'react';
import ResultScreen from './ResultScreen.js';
import ComputationScreen from './ComputationScreen.js';

const Screen = (props) => {
    return (
        <div className ="screen">
            <ResultScreen result= {props.result}/> 
            <ComputationScreen /> 
        </div>
    )
}

export default Screen; 
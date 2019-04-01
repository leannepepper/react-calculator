import React from 'react';
import ResultScreen from './ResultScreen.js';


const Screen = (props) => {
    return (
        <div className ="screen">
             <ResultScreen>{props.result}</ResultScreen>
        </div>
    )
}

export default Screen; 
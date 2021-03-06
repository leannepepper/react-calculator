import React from 'react';
import Screen from './screen/Screen.js';
import Keypad from './keypad/keypad.js';

const Calculator = (props) => {
    return (
    <main className="calculator"> 
        <Screen result= {props.result}/> 
        <Keypad handleMath = {props.handleMath}/> 
     </main>
    )
    
}

export default Calculator; 
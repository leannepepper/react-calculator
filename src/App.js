import React, { Component } from 'react';
import './main.css';
import Calculator from './Calculator.js';


class App extends Component {
 state = {
   result: ""
 }

  render() {
    return (
      <div className="app">
      <Calculator result={this.state.result}/>
    
      </div>
    )
  }
} 


export default App;

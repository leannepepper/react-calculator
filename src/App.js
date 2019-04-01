import React, { Component } from 'react';
import './main.css';
import Calculator from './Calculator.js';


class App extends Component {
 state = {
   result: ""
 }

 handleMath = button => {

  if(button === "="){
      this.calculate()
      console.log(this.state.result)
  }

  else if(button === "C"){
      this.reset()
  }
  else if(button === "CE"){
      this.backspace()
  }

  else {
      this.setState({
          result: this.state.result + button
      })
      console.log(this.state.result + button)
  }
}


calculate = () => {
  try {
      this.setState({
        result: (eval(this.state.result) || "" ) + ""
      })
  } catch (e) {
      this.setState({
          result: "error (press C)"
      })

  }
};


 reset = () => {
   this.setState({
     result: ""
   })
 };

 backspace= () => {
   this.setState({
     result: this.state.result.slice(0, -1)
   })
 }; 

  render() {
    return (
      <div className="app">
      <Calculator result={this.state.result}
        handleMath={this.handleMath}
        
      />
    
      </div>
    )
  }
}


export default App;

import React from 'react'; 

const Keypad = () => {
    return (
    <div className="button">
        <button className="button-tile" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
        <button className="button-tile" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
        <button className="button-tile" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
        <button className="button-tile" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


        <button className="button-tile" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button className="button-tile" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button className="button-tile" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button className="button-tile" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


        <button className="button-tile" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button className="button-tile" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button className="button-tile" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button className="button-tile" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

        <button className="button-tile" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button className="button-tile" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button className="button-tile" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button className="button-tile" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


        <button className="button-tile" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
        <button className="button-tile" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button className="button-tile" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
        <button className="button-tile" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
    </div>
    )
}
export default Keypad;
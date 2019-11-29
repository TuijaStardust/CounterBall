import React, {Component} from 'react';
import './Counter.css';


class Counter extends Component {
    state = {
        counter: 0
    }

    addOne = () => {
        this.setState({counter: this.state.counter +1})
    }

    removeOne = () => {
        if (this.state.counter > 0){
            this.setState({counter: this.state.counter - 1})
        } // else {this.setState({counter: 0})}
    }

    resetCounter = () => {
        this.setState({counter: 0})
    }
     
    render() {  
        return (    
            <div className="container">
                <div className={this.state.counter %2 === 0 ? "circle even" : "circle odd"}>
                    <p className="number">{this.state.counter}</p>
                </div>
                <div className="buttons">
                    <button className="add-button" onClick={this.addOne}>Add One</button>
                    <button className="remove-button" onClick={this.removeOne}>Remove One</button>
                    <button className="reset-button" onClick={this.resetCounter}>Reset Counter</button>
                </div>
            </div>
        )}    
}

export default Counter;
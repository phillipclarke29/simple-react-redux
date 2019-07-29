import React, {Component} from "react";

class Counter extends Component {
    render(){
        return (
            <div>
                <div className="title">
                    <h2>React Redux Counter</h2>
                </div>
                <div className="container">

                    <button className="buttons"
                            onClick={this.props.decreaseCount}>-</button>
                    <span>{this.props.countValue}</span>
                    <button className="buttons"
                            onClick={this.props.increaseCount}>+</button>
                </div>
            </div>
        );
    }
}

export default Counter
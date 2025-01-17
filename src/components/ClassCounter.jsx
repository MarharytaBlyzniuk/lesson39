// src/components/ClassCounter.jsx
import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1>Class-Based Component: Counter</h1>
                <p>Current count: {this.state.count}</p>
                <button onClick={this.increaseCount}>Increase</button>
            </div>
        );
    }
}

export default ClassCounter;

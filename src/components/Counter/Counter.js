import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 9007199254740990
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        });
    }

    render() {
        return (
            <h1 onClick={this.clickHandler}>{this.state.count}</h1>
        );
    }
}

export default Counter;
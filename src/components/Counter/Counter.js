import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
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
            <div>
                {this.state.count} <button onClick={this.clickHandler}>Click me</button>
            </div>
        );
    }
}

export default Counter;
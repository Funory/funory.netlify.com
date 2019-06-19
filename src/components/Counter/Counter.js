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
        if(this.state.count == 10) {
            throw new Error('this count is to high for me :3')
        }

        return (
            <h1 onClick={this.clickHandler}>{this.state.count}</h1>
        );
    }
}

export default Counter;
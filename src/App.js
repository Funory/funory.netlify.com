import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            resp: null
        };
    }

    componentDidMount() {
        fetch('/.netlify/functions/hello')
            .then(resp => resp.text())
            .then(resp => this.setState({
                resp
            }));
    }

    render() {
        const { resp } = this.state;

        return (
            <div className="App">
                Response: {resp ? resp : "Loading.."}
            </div>
        );
    }
}

export default App;

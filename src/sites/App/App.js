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

        if(resp) throw new Error('error');

        return (
            <div className="App">
                <h1>This website is currently in development!</h1>
                <p>{React.version}</p>
            </div>
        );
    }
}

export default App;

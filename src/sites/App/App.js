import React from 'react';
import './App.css';

// Components
import Counter from '../../components/Counter/Counter';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

class App extends React.Component {
    constructor(props) {
        super(props);

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
                <h1>This website is currently in development!</h1>
                <p>{resp}</p>
                <ErrorBoundary><Counter /></ErrorBoundary>
            </div>
        );
    }
}

export default App;

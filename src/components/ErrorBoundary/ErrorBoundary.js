import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="ErrorBoundary">
                    <h1 className="text-red">Error 500 - Internal Server Error!</h1><br />
                    <div>
                        <button className="button" onClick={() => { window.location.href = window.location.origin }}><i class="fas fa-arrow-left"></i> Go Back</button>
                        <button className="button" onClick={() => { window.location.reload() }}><i class="fas fa-redo-alt"></i> Reload</button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
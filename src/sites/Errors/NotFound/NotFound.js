import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
    render() {
        return (
            <div className="NotFound">
                <h1 className="text-red">Error 404 - Not Found!</h1><br />
                <div>
                    <button className="button" onClick={() => { window.location.href = window.location.origin }}><i class="fas fa-arrow-left"></i> Go Back</button>
                    <button className="button" onClick={() => { window.location.reload() }}><i class="fas fa-redo-alt"></i> Reload</button>
                </div>
            </div>
        );
    }
}

export default NotFound;
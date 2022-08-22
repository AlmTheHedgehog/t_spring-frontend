import React, { Component } from 'react';

class NotFoundComponent extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}} className='display-2'>E404</h1>
                <h2 style={{textAlign: 'center', color: 'gray'}}>Invalid route</h2>
            </div>
        );
    }
}

export default NotFoundComponent;
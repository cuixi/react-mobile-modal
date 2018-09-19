import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal, { Info, Confirm } from '../src/index';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={Info}>Info Button</button>
                <button onClick={Confirm}>Confirm Button</button>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('J_wrap')
);
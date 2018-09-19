import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ModalPortal from './ModalPortal';
import './Modal.less';

// 判断是否react16
const isReact16 = ReactDOM.createPortal !== undefined;
// 兼容react16及15以下传送门
const createPortal = isReact16
    ? ReactDOM.createPortal
    : ReactDOM.unstable_renderSubtreeIntoContainer;


class Modal extends Component {
    constructor() {
        super();

        const doc = window.document;
        this.node = doc.createElement('div');
        doc.body.appendChild(this.node);

        this.removePortal = this.removePortal.bind(this);
        this.renderPortal = this.renderPortal.bind(this);
    }
    componentDidMount() {
        if (!isReact16) {
            this.renderPortal(this.props);
        }
    }
    componentWillReceiveProps(newProps) {
        if (!isReact16) {
            this.renderPortal(newProps);
        }
    }
    componentWillUnmount() {
        this.removePortal();
    }
    removePortal() {
        if (!isReact16) {
            ReactDOM.unmountComponentAtNode(this.node);
        }
        this.node.parentNode.removeChild(this.node);
    }
    renderPortal(props) {
        createPortal(
            this,
            <ModalPortal {...props} />,
            this.node
        );
    }
    render() {
        return (
            createPortal(
                <ModalPortal {...this.props} />,
                this.node
            )
        );
    }
}


export default Modal;
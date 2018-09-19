import React, { Component } from 'react';

import './ActionButton.less';


class ActionButton extends Component {
    constructor() {
        super();
        this.state = {
            loading: false
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        const { actionFn, closeModal } = this.props;
        if (actionFn) {
            const ret = actionFn();
            if (!ret) {
                closeModal();
            }
            if (ret && ret.then) {
                this.setState({ loading: true });
                ret.then(() => {
                    closeModal();
                    this.setState({ loading: false });
                }, () => {
                    this.setState({ loading: false });
                });
            }
        } else {
            closeModal();
        }
    }
    render() {
        const { type } = this.props;
        const buttonClassName = type === 'confirm' ? 'action-button confirm-action-button' : 'action-button cancel-action-button';

        return (
            <div className={buttonClassName} onClick={this.onClick}>
                {this.props.children}
            </div>
        );
    }
}


export default ActionButton;
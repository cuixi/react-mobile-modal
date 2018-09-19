import React, { Component } from 'react';

import './ModalPortal.less';


class ModalPortal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }
    componentDidMount() {
        const { isOpen } = this.props;
        if (isOpen) {
            this.openModal();
        }
    }
    componentWillReceiveProps(newProps) {
        const { isOpen } = newProps;
        this.setState({ isOpen });
    }
    /**
     * 打开modal
     */
    openModal = () => {
        this.setState({ isOpen: true });
    }
    /**
     * 关闭modal
     */
    closeModal = () => {
        this.setState({ isOpen: false });
    }
    /**
     * 判断蒙层是否能关闭
     */
    shouldCloseOverlay = () => {
        const { overlayClosable } = this.props;
        if (overlayClosable) {
            this.closeModal();
        }
    }
    /**
     * 合并className
     * @param {String}  which   合并className的模块
     */
    combineClassName = (which) => {
        const { basePrefixCls, prefixCls } = this.props;
        let classList = `ReactModal__${which}`;

        if (basePrefixCls) {
            classList += ` ${basePrefixCls}__${which}`;
        }

        if (prefixCls) {
            classList += ` ${prefixCls}__${which}`;
        }

        return classList;
    }
    showOpen = () => this.state.isOpen;
    render() {
        return this.showOpen() ? (
            <div className={this.combineClassName('Component')}>
                {/* modal蒙层 */}
                <div className={this.combineClassName('Overlay')} onClick={this.shouldCloseOverlay}></div>
                {/* modal内容 */}
                <div className={this.combineClassName('Body')}>
                    <div className={this.combineClassName('Main')}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        ) : null;
    }
}


export default ModalPortal;
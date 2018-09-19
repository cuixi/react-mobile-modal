import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import './ModalPortal.less';

var ModalPortal = function (_Component) {
    _inherits(ModalPortal, _Component);

    function ModalPortal() {
        _classCallCheck(this, ModalPortal);

        var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || _Object$getPrototypeOf(ModalPortal)).call(this));

        _this.state = {
            isOpen: false
        };

        _this.openModal = _this.openModal.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        _this.shouldCloseOverlay = _this.shouldCloseOverlay.bind(_this);
        _this.combineClassName = _this.combineClassName.bind(_this);
        _this.showOpen = _this.showOpen.bind(_this);
        return _this;
    }

    _createClass(ModalPortal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var isOpen = this.props.isOpen;

            if (isOpen) {
                this.openModal();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var isOpen = newProps.isOpen;

            this.setState({ isOpen: isOpen });
        }
        /**
         * 打开modal
         */

    }, {
        key: 'openModal',
        value: function openModal() {
            this.setState({ isOpen: true });
        }
        /**
         * 关闭modal
         */

    }, {
        key: 'closeModal',
        value: function closeModal() {
            this.setState({ isOpen: false });
        }
        /**
         * 判断蒙层是否能关闭
         */

    }, {
        key: 'shouldCloseOverlay',
        value: function shouldCloseOverlay() {
            var overlayClosable = this.props.overlayClosable;

            if (overlayClosable) {
                this.closeModal();
            }
        }
        /**
         * 合并className
         * @param {String}  which   合并className的模块
         */

    }, {
        key: 'combineClassName',
        value: function combineClassName(which) {
            var _props = this.props,
                basePrefixCls = _props.basePrefixCls,
                prefixCls = _props.prefixCls;

            var classList = 'ReactModal__' + which;

            if (basePrefixCls) {
                classList += ' ' + basePrefixCls + '__' + which;
            }

            if (prefixCls) {
                classList += ' ' + prefixCls + '__' + which;
            }

            return classList;
        }
    }, {
        key: 'showOpen',
        value: function showOpen() {
            return this.state.isOpen;
        }
    }, {
        key: 'render',
        value: function render() {
            return this.showOpen() ? React.createElement(
                'div',
                { className: this.combineClassName('Component') },
                React.createElement('div', { className: this.combineClassName('Overlay'), onClick: this.shouldCloseOverlay }),
                React.createElement(
                    'div',
                    { className: this.combineClassName('Body') },
                    React.createElement(
                        'div',
                        { className: this.combineClassName('Main') },
                        this.props.children
                    )
                )
            ) : null;
        }
    }]);

    return ModalPortal;
}(Component);

export default ModalPortal;
module.exports = exports['default'];
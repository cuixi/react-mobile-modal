import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ModalPortal from './ModalPortal';
import './Modal.less';

// 判断是否react16
var isReact16 = ReactDOM.createPortal !== undefined;
// 兼容react16及15以下传送门
var createPortal = isReact16 ? ReactDOM.createPortal : ReactDOM.unstable_renderSubtreeIntoContainer;

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || _Object$getPrototypeOf(Modal)).call(this));

        var doc = window.document;
        _this.node = doc.createElement('div');
        doc.body.appendChild(_this.node);

        _this.removePortal = _this.removePortal.bind(_this);
        _this.renderPortal = _this.renderPortal.bind(_this);
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!isReact16) {
                this.renderPortal(this.props);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (!isReact16) {
                this.renderPortal(newProps);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removePortal();
        }
    }, {
        key: 'removePortal',
        value: function removePortal() {
            if (!isReact16) {
                ReactDOM.unmountComponentAtNode(this.node);
            }
            this.node.parentNode.removeChild(this.node);
        }
    }, {
        key: 'renderPortal',
        value: function renderPortal(props) {
            createPortal(this, React.createElement(ModalPortal, props), this.node);
        }
    }, {
        key: 'render',
        value: function render() {
            return createPortal(React.createElement(ModalPortal, this.props), this.node);
        }
    }]);

    return Modal;
}(Component);

export default Modal;
module.exports = exports['default'];
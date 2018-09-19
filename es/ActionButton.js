import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import './ActionButton.less';

var ActionButton = function (_Component) {
    _inherits(ActionButton, _Component);

    function ActionButton() {
        _classCallCheck(this, ActionButton);

        var _this = _possibleConstructorReturn(this, (ActionButton.__proto__ || _Object$getPrototypeOf(ActionButton)).call(this));

        _this.state = {
            loading: false
        };
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(ActionButton, [{
        key: 'onClick',
        value: function onClick() {
            var _this2 = this;

            var _props = this.props,
                actionFn = _props.actionFn,
                closeModal = _props.closeModal;

            if (actionFn) {
                var ret = actionFn();
                if (!ret) {
                    closeModal();
                }
                if (ret && ret.then) {
                    this.setState({ loading: true });
                    ret.then(function () {
                        closeModal();
                        _this2.setState({ loading: false });
                    }, function () {
                        _this2.setState({ loading: false });
                    });
                }
            } else {
                closeModal();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var type = this.props.type;

            var buttonClassName = type === 'confirm' ? 'action-button confirm-action-button' : 'action-button cancel-action-button';

            return React.createElement(
                'div',
                { className: buttonClassName, onClick: this.onClick },
                this.props.children
            );
        }
    }]);

    return ActionButton;
}(Component);

export default ActionButton;
module.exports = exports['default'];
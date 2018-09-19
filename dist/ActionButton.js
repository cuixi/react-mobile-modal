'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ActionButton.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionButton = function (_Component) {
    (0, _inherits3.default)(ActionButton, _Component);

    function ActionButton() {
        (0, _classCallCheck3.default)(this, ActionButton);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ActionButton.__proto__ || (0, _getPrototypeOf2.default)(ActionButton)).call(this));

        _this.state = {
            loading: false
        };
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ActionButton, [{
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

            return _react2.default.createElement(
                'div',
                { className: buttonClassName, onClick: this.onClick },
                this.props.children
            );
        }
    }]);
    return ActionButton;
}(_react.Component);

exports.default = ActionButton;
module.exports = exports['default'];
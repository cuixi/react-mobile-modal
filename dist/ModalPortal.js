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

require('./ModalPortal.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalPortal = function (_Component) {
    (0, _inherits3.default)(ModalPortal, _Component);

    function ModalPortal() {
        (0, _classCallCheck3.default)(this, ModalPortal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ModalPortal.__proto__ || (0, _getPrototypeOf2.default)(ModalPortal)).call(this));

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

    (0, _createClass3.default)(ModalPortal, [{
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
            return this.showOpen() ? _react2.default.createElement(
                'div',
                { className: this.combineClassName('Component') },
                _react2.default.createElement('div', { className: this.combineClassName('Overlay'), onClick: this.shouldCloseOverlay }),
                _react2.default.createElement(
                    'div',
                    { className: this.combineClassName('Body') },
                    _react2.default.createElement(
                        'div',
                        { className: this.combineClassName('Main') },
                        this.props.children
                    )
                )
            ) : null;
        }
    }]);
    return ModalPortal;
}(_react.Component);

exports.default = ModalPortal;
module.exports = exports['default'];
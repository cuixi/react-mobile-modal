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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ModalPortal = require('./ModalPortal');

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

require('./Modal.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 判断是否react16
var isReact16 = _reactDom2.default.createPortal !== undefined;
// 兼容react16及15以下传送门
var createPortal = isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;

var Modal = function (_Component) {
    (0, _inherits3.default)(Modal, _Component);

    function Modal() {
        (0, _classCallCheck3.default)(this, Modal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this));

        var doc = window.document;
        _this.node = doc.createElement('div');
        doc.body.appendChild(_this.node);

        _this.removePortal = _this.removePortal.bind(_this);
        _this.renderPortal = _this.renderPortal.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Modal, [{
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
                _reactDom2.default.unmountComponentAtNode(this.node);
            }
            this.node.parentNode.removeChild(this.node);
        }
    }, {
        key: 'renderPortal',
        value: function renderPortal(props) {
            createPortal(this, _react2.default.createElement(_ModalPortal2.default, props), this.node);
        }
    }, {
        key: 'render',
        value: function render() {
            return createPortal(_react2.default.createElement(_ModalPortal2.default, this.props), this.node);
        }
    }]);
    return Modal;
}(_react.Component);

exports.default = Modal;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = confirm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _ActionButton = require('./ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

require('./Confirm.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReact16 = !!_reactDom2.default.createPortal;

var ConfirmDialog = function ConfirmDialog(props) {
    var isOpen = props.isOpen,
        basePrefixCls = props.basePrefixCls,
        prefixCls = props.prefixCls,
        title = props.title,
        content = props.content,
        isTplStr = props.isTplStr,
        confirmTxt = props.confirmTxt,
        cancelTxt = props.cancelTxt,
        close = props.close,
        onCancel = props.onCancel,
        onConfirm = props.onConfirm,
        showCancelBtn = props.showCancelBtn,
        showConfirmBtn = props.showConfirmBtn,
        showCloseBtn = props.showCloseBtn;


    var overlayClosable = props.overlayClosable === undefined ? false : props.overlayClosable;

    var getModalTitle = function getModalTitle() {
        if (!title) return false;
        if (typeof title === 'string' && !isTplStr) {
            return _react2.default.createElement(
                'div',
                { className: 'modal-header' },
                _react2.default.createElement(
                    'h3',
                    { className: 'modal-title' },
                    title
                )
            );
        }
        return _react2.default.createElement(
            'div',
            { className: 'modal-header' },
            title
        );
    };

    var getModalContent = function getModalContent() {
        if (!content) return false;
        if (typeof content === 'string' && !isTplStr) {
            return _react2.default.createElement(
                'div',
                { className: 'modal-content' },
                _react2.default.createElement(
                    'p',
                    null,
                    content
                )
            );
        }
        return _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            content
        );
    };

    return _react2.default.createElement(
        _Modal2.default,
        {
            isOpen: isOpen,
            basePrefixCls: basePrefixCls,
            prefixCls: prefixCls,
            overlayClosable: overlayClosable },
        getModalTitle(),
        getModalContent(),
        _react2.default.createElement(
            'div',
            { className: 'modal-buttons' },
            showCancelBtn && _react2.default.createElement(
                _ActionButton2.default,
                {
                    type: 'cancel',
                    closeModal: close,
                    actionFn: onCancel },
                cancelTxt || '取消'
            ),
            showConfirmBtn && _react2.default.createElement(
                _ActionButton2.default,
                {
                    type: 'confirm',
                    closeModal: close,
                    actionFn: onConfirm },
                confirmTxt || '确认'
            )
        ),
        showCloseBtn && _react2.default.createElement('span', { className: 'close-btn', onClick: close })
    );
};

/**
 * confirm弹窗
 * @param {String}      title           标题
 * @param {String}      content         内容
 * @param {String}      confirmTxt      确认按钮文案
 */
function confirm(options) {
    var doc = window.document;
    var div = doc.createElement('div'); // 新建modal的包装元素

    /**
     * 渲染弹窗
     * @param {Object} props    弹窗参数
     */
    function render(props) {
        _reactDom2.default.render(_react2.default.createElement(ConfirmDialog, props), div);
    }

    /**
     * 关闭弹窗
     */
    function close() {
        if (isReact16) {
            render((0, _extends3.default)({}, options, { isOpen: false, overlayClosable: false }));
        } else {
            var unmountResult = _reactDom2.default.unmountComponentAtNode(div);
            if (unmountResult && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }
    }

    render((0, _extends3.default)({}, options, { isOpen: true, overlayClosable: false, close: close }));

    return {
        destory: close
    };
}
module.exports = exports['default'];
import _extends from 'babel-runtime/helpers/extends';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Modal from './Modal';
import ActionButton from './ActionButton';

import './Confirm.less';

var isReact16 = !!ReactDOM.createPortal;

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
            return React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                    'h3',
                    { className: 'modal-title' },
                    title
                )
            );
        }
        return React.createElement(
            'div',
            { className: 'modal-header' },
            title
        );
    };

    var getModalContent = function getModalContent() {
        if (!content) return false;
        if (typeof content === 'string' && !isTplStr) {
            return React.createElement(
                'div',
                { className: 'modal-content' },
                React.createElement(
                    'p',
                    null,
                    content
                )
            );
        }
        return React.createElement(
            'div',
            { className: 'modal-content' },
            content
        );
    };

    return React.createElement(
        Modal,
        {
            isOpen: isOpen,
            basePrefixCls: basePrefixCls,
            prefixCls: prefixCls,
            overlayClosable: overlayClosable },
        getModalTitle(),
        getModalContent(),
        React.createElement(
            'div',
            { className: 'modal-buttons' },
            showCancelBtn && React.createElement(
                ActionButton,
                {
                    type: 'cancel',
                    closeModal: close,
                    actionFn: onCancel },
                cancelTxt || '取消'
            ),
            showConfirmBtn && React.createElement(
                ActionButton,
                {
                    type: 'confirm',
                    closeModal: close,
                    actionFn: onConfirm },
                confirmTxt || '确认'
            )
        ),
        showCloseBtn && React.createElement('span', { className: 'close-btn', onClick: close })
    );
};

/**
 * confirm弹窗
 * @param {String}      title           标题
 * @param {String}      content         内容
 * @param {String}      confirmTxt      确认按钮文案
 */
export default function confirm(options) {
    var doc = window.document;
    var div = doc.createElement('div'); // 新建modal的包装元素

    /**
     * 渲染弹窗
     * @param {Object} props    弹窗参数
     */
    function render(props) {
        ReactDOM.render(React.createElement(ConfirmDialog, props), div);
    }

    /**
     * 关闭弹窗
     */
    function close() {
        if (isReact16) {
            render(_extends({}, options, { isOpen: false, overlayClosable: false }));
        } else {
            var unmountResult = ReactDOM.unmountComponentAtNode(div);
            if (unmountResult && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }
    }

    render(_extends({}, options, { isOpen: true, overlayClosable: false, close: close }));

    return {
        destory: close
    };
}
module.exports = exports['default'];
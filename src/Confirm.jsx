import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Modal from './Modal.jsx';
import ActionButton from './ActionButton.jsx';

import './Confirm.less';


const isReact16 = !!ReactDOM.createPortal;

const ConfirmDialog = (props) => {
    const {
        isOpen, // modal开关
        basePrefixCls, // 模块风格样式前缀
        prefixCls, // 当前模块样式前缀
        title, // 标题
        content, // 内容
        isTplStr, // 是否是模版字符串
        confirmTxt, // 确认按钮文案
        cancelTxt, // 取消按钮文案
        close, // 关闭modal
        onCancel, // 取消按钮事件
        onConfirm, // 确认按钮事件
        showCancelBtn, // 是否展示取消按钮
        showConfirmBtn, // 是否展示确认按钮
        showCloseBtn // 是否展示关闭按钮
    } = props;

    const overlayClosable = props.overlayClosable === undefined ? false : props.overlayClosable;

    const getModalTitle = () => {
        if (!title) return false;
        if (typeof title === 'string' && !isTplStr) {
            return <div className="modal-header"><h3 className="modal-title">{title}</h3></div>;
        }
        return <div className="modal-header">{title}</div>;
    };

    const getModalContent = () => {
        if (!content) return false;
        if (typeof content === 'string' && !isTplStr) {
            return <div className="modal-content"><p>{content}</p></div>;
        }
        return <div className="modal-content">{content}</div>;
    };

    return (
        <Modal
            isOpen={isOpen}
            basePrefixCls={basePrefixCls}
            prefixCls={prefixCls}
            overlayClosable={overlayClosable}>

            {/* 弹窗title */}
            {getModalTitle()}

            {/* 弹窗内容 */}
            {getModalContent()}

            {/* 弹窗按钮 */}
            <div className="modal-buttons">
                {showCancelBtn && <ActionButton
                    type='cancel'
                    closeModal={close}
                    actionFn={onCancel}>{cancelTxt || '取消'}</ActionButton>}

                {showConfirmBtn && <ActionButton
                    type='confirm'
                    closeModal={close}
                    actionFn={onConfirm}>{confirmTxt || '确认'}</ActionButton>}
            </div>

            {/* 关闭按钮 */}
            {showCloseBtn && <span className="close-btn" onClick={close}></span>}
        </Modal>
    );
};


/**
 * confirm弹窗
 * @param {String}      title           标题
 * @param {String}      content         内容
 * @param {String}      confirmTxt      确认按钮文案
 */
export default function confirm(options) {
    const doc = window.document;
    const div = doc.createElement('div'); // 新建modal的包装元素

    /**
     * 渲染弹窗
     * @param {Object} props    弹窗参数
     */
    function render(props) {
        ReactDOM.render(<ConfirmDialog {...props} />, div);
    }

    /**
     * 关闭弹窗
     */
    function close() {
        if (isReact16) {
            render({ ...options, isOpen: false, overlayClosable: false });
        } else {
            const unmountResult = ReactDOM.unmountComponentAtNode(div);
            if (unmountResult && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }
    }

    render({ ...options, isOpen: true, overlayClosable: false, close });

    return {
        destory: close
    };
}
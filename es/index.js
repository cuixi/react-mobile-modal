import _extends from 'babel-runtime/helpers/extends';
import confirm from './Confirm';

/**
 * message
 * @param {Object} options
 */
export var Message = function Message(options) {};

/**
 * info
 * @param {Object} options
 */
export var Info = function Info(options) {
    var config = _extends({
        showCloseBtn: true,
        showCancelBtn: false,
        showConfirmBtn: true
    }, options);
    return confirm(config);
};

/**
 * confirm
 * @param {Object} options
 */
export var Confirm = function Confirm(options) {
    var config = _extends({
        showCloseBtn: false,
        showCancelBtn: true,
        showConfirmBtn: true
    }, options);
    return confirm(config);
};

export default {
    Message: Message,
    Info: Info,
    Confirm: Confirm
};
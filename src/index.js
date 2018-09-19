import confirm from './Confirm.jsx';


/**
 * message
 * @param {Object} options
 */
export const Message = (options) => {

};


/**
 * info
 * @param {Object} options
 */
export const Info = (options) => {
    const config = {
        showCloseBtn: true,
        showCancelBtn: false,
        showConfirmBtn: true,
        ...options
    };
    return confirm(config);
};

/**
 * confirm
 * @param {Object} options
 */
export const Confirm = (options) => {
    const config = {
        showCloseBtn: false,
        showCancelBtn: true,
        showConfirmBtn: true,
        ...options
    };
    return confirm(config);
};


export default {
    Message,
    Info,
    Confirm
};
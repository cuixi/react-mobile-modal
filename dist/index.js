'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Confirm = exports.Info = exports.Message = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Confirm = require('./Confirm.jsx');

var _Confirm2 = _interopRequireDefault(_Confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * message
 * @param {Object} options
 */
var Message = exports.Message = function Message(options) {};

/**
 * info
 * @param {Object} options
 */
var Info = exports.Info = function Info(options) {
    var config = (0, _extends3.default)({
        showCloseBtn: true,
        showCancelBtn: false,
        showConfirmBtn: true
    }, options);
    return (0, _Confirm2.default)(config);
};

/**
 * confirm
 * @param {Object} options
 */
var Confirm = exports.Confirm = function Confirm(options) {
    var config = (0, _extends3.default)({
        showCloseBtn: false,
        showCancelBtn: true,
        showConfirmBtn: true
    }, options);
    return (0, _Confirm2.default)(config);
};

exports.default = {
    Message: Message,
    Info: Info,
    Confirm: Confirm
};
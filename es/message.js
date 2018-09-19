import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Message = function (_Component) {
    _inherits(Message, _Component);

    function Message(props) {
        _classCallCheck(this, Message);

        return _possibleConstructorReturn(this, (Message.__proto__ || _Object$getPrototypeOf(Message)).call(this, props));
    }

    _createClass(Message, [{
        key: 'render',
        value: function render() {
            var title = this.props.title;

            return React.createElement(
                'p',
                { className: 'message' },
                title
            );
        }
    }]);

    return Message;
}(Component);

Message.propTypes = {
    title: PropTypes.string
};
export default Message;
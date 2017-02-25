'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button.scss');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Button(_ref) {
  var color = _ref.color,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['color', 'className', 'onClick']);

  var buttonColor = color ? _button2.default['btn--' + color] : '';

  return _react2.default.createElement(
    'button',
    _extends({
      className: _button2.default.btn + ' ' + buttonColor + ' ' + className,
      onClick: onClick
    }, props),
    props.children
  );
}

Button.propTypes = {
  color: _react.PropTypes.string,
  className: _react.PropTypes.any,
  children: _react.PropTypes.any.isRequired,
  onClick: _react.PropTypes.func.isRequired
};

var _default = Button;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Button, 'Button', 'src/components/Button/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Button/index.js');
}();

;
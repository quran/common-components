'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var Radio = function Radio(_ref) {
  var id = _ref.id,
      name = _ref.name,
      checked = _ref.checked,
      handleChange = _ref.handleChange,
      children = _ref.children;
  return _react2.default.createElement(
    'label',
    { className: styles.radio, htmlFor: id },
    _react2.default.createElement('input', {
      id: id,
      className: styles.input,
      type: 'radio',
      name: name,
      checked: checked,
      onChange: handleChange
    }),
    _react2.default.createElement(
      'span',
      { className: styles.outer },
      _react2.default.createElement('span', { className: styles.inner })
    ),
    children
  );
};

Radio.propTypes = {
  id: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  checked: _react.PropTypes.bool.isRequired,
  handleChange: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.element.isRequired
};

var _default = Radio;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Radio, 'Radio', 'src/components/Radio/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Radio/index.js');
}();

;
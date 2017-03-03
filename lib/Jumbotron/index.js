'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _background = require('../../images/background.jpg');

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var Jumbotron = function Jumbotron(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    {
      className: styles.container,
      style: { backgroundImage: 'url(' + _background2.default + ')' }
    },
    children
  );
};

Jumbotron.propTypes = {
  children: _react.PropTypes.element.isRequired
};

var _default = Jumbotron;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Jumbotron, 'Jumbotron', 'src/components/Jumbotron/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Jumbotron/index.js');
}();

;
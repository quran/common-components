webpackHotUpdatecPatterns(0,{

/***/ "./container/Home.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__("./components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _style = __webpack_require__("./container/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		{ className: _style2.default.app },
		_react2.default.createElement(
			'h1',
			null,
			'Quran Common Components '
		),
		_react2.default.createElement('hr', null),
		_react2.default.createElement(
			'section',
			null,
			_react2.default.createElement(
				_Button2.default,
				null,
				'Button Example'
			)
		)
	);
};

var _default = Home;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Home, 'Home', '/Users/sabeur/workspace/apps/quran-components/src/container/Home.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/sabeur/workspace/apps/quran-components/src/container/Home.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.fee8c10fee2ae3b58a9f.hot-update.js.map
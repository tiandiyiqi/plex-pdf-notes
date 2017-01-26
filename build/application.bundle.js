webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _redux = __webpack_require__(178);

	var _reactRedux = __webpack_require__(199);

	var _reduxThunk = __webpack_require__(216);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxPromise = __webpack_require__(217);

	var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

	var _reduxLogger = __webpack_require__(224);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _LandingPage = __webpack_require__(230);

	var _LandingPage2 = _interopRequireDefault(_LandingPage);

	var _reducers = __webpack_require__(232);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var logger = (0, _reduxLogger2.default)(); /**
	                                            * @Author: BLRplex (Maksim Tarhunakau)
	                                            * @Date:   2017-01-26 11:52:09
	                                            * @Last Modified by:   BLRplex (Maksim Tarhunakau)
	                                            * @Last Modified time: 2017-01-26 12:01:21
	                                            */

	var store = (0, _redux.createStore)((0, _redux.combineReducers)({
	    application: _reducers2.default
	}), (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxPromise2.default, logger));

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_LandingPage2.default, null)
		), document.getElementById('application'));

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BasePageLayout = __webpack_require__(231);

	var _BasePageLayout2 = _interopRequireDefault(_BasePageLayout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: BLRplex (Maksim Tarhunakau)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date:   2017-01-26 11:54:25
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by:   BLRplex (Maksim Tarhunakau)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2017-01-26 12:02:14
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

	var LandingPage = function (_Component) {
	    _inherits(LandingPage, _Component);

	    function LandingPage() {
	        _classCallCheck(this, LandingPage);

	        return _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));
	    }

	    _createClass(LandingPage, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _BasePageLayout2.default,
	                null,
	                _react2.default.createElement('div', { className: 'page landing-page' })
	            );
	        }
	    }]);

	    return LandingPage;
	}(_react.Component);

		exports.default = LandingPage;

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: BLRplex (Maksim Tarhunakau)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date:   2017-01-26 11:56:46
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by:   BLRplex (Maksim Tarhunakau)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2017-01-26 11:57:01
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var BasePageLayout = function (_Component) {
	    _inherits(BasePageLayout, _Component);

	    function BasePageLayout() {
	        _classCallCheck(this, BasePageLayout);

	        return _possibleConstructorReturn(this, (BasePageLayout.__proto__ || Object.getPrototypeOf(BasePageLayout)).apply(this, arguments));
	    }

	    _createClass(BasePageLayout, [{
	        key: "render",
	        value: function render() {
	            var children = this.props.children;


	            return _react2.default.createElement(
	                "div",
	                { className: "container" },
	                _react2.default.createElement(
	                    "main",
	                    { id: "content", role: "main" },
	                    children
	                )
	            );
	        }
	    }]);

	    return BasePageLayout;
	}(_react.Component);

		exports.default = BasePageLayout;

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(178);

	var reducers = (0, _redux.combineReducers)({}); /**
	                                                 * @Author: BLRplex (Maksim Tarhunakau)
	                                                 * @Date:   2017-01-26 11:58:51
	                                                 * @Last Modified by:   BLRplex (Maksim Tarhunakau)
	                                                 * @Last Modified time: 2017-01-26 11:59:17
	                                                 */

		exports.default = reducers;

/***/ }

});
//# sourceMappingURL=application.bundle.js.map
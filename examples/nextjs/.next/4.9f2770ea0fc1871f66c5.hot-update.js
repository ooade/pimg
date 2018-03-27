webpackHotUpdate(4,{

/***/ "../../dist/pimg.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../../node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__ = __webpack_require__("../../node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__);




var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * @function config
 * @instance instance
 * @prop {String} className - The default className's for your PIMG(s)
 * @prop {String} placeholderClassName - The default placeholder className's for your image(s)
 * @prop {Function} onError - Determines how errors are handled in the component
 * @prop {Boolean | Object} dataSaver - Choose to use dataSaver mode
 * @prop {String} dataSaver.wrapperClassName - DataSaver wrapper className
 * @prop {String} dataSaver.buttonClassName - DataSaver button className
 */

var config = function () {
	var instance = void 0;

	var init = function init() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$buttonClassName = _ref.buttonClassName,
		    buttonClassName = _ref$buttonClassName === undefined ? 'pimg__btn' : _ref$buttonClassName,
		    _ref$className = _ref.className,
		    className = _ref$className === undefined ? 'pimg' : _ref$className,
		    _ref$dataSaver = _ref.dataSaver,
		    dataSaver = _ref$dataSaver === undefined ? false : _ref$dataSaver,
		    _ref$fetchOnDemand = _ref.fetchOnDemand,
		    fetchOnDemand = _ref$fetchOnDemand === undefined ? false : _ref$fetchOnDemand,
		    _ref$error = _ref.error,
		    error = _ref$error === undefined ? null : _ref$error,
		    _ref$placeholderClass = _ref.placeholderClassName,
		    placeholderClassName = _ref$placeholderClass === undefined ? 'pimg__placeholder' : _ref$placeholderClass,
		    _ref$wrapperClassName = _ref.wrapperClassName,
		    wrapperClassName = _ref$wrapperClassName === undefined ? 'pimg__wrapper' : _ref$wrapperClassName;

		if ((typeof dataSaver === 'undefined' ? 'undefined' : _typeof(dataSaver)) !== 'object' && dataSaver === true) {
			dataSaver = {
				wrapperClassName: wrapperClassName,
				buttonClassName: buttonClassName
			};
		} else if ((typeof dataSaver === 'undefined' ? 'undefined' : _typeof(dataSaver)) === 'object') {
			dataSaver = {
				wrapperClassName: dataSaver.wrapperClassName || wrapperClassName,
				buttonClassName: dataSaver.buttonClassName || buttonClassName
			};
		}

		return {
			onError: function onError(error) {
				error = error;
			},
			getClassName: function getClassName() {
				return className;
			},
			getButtonClassName: function getButtonClassName() {
				return buttonClassName;
			},
			getDataSaver: function getDataSaver() {
				return dataSaver;
			},
			getError: function getError(cb) {
				return cb(error);
			},
			getFetchOnDemand: function getFetchOnDemand() {
				return fetchOnDemand;
			},
			getPlaceholderClassName: function getPlaceholderClassName() {
				return placeholderClassName;
			},
			getWrapperClassName: function getWrapperClassName() {
				return wrapperClassName;
			}
		};
	};

	return function (params) {
		return instance ? instance : instance = init(params);
	};
}();

var Image = function (_Component) {
	inherits(Image, _Component);

	function Image() {
		var _ref;

		var _temp, _this, _ret;

		classCallCheck(this, Image);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			blob: null,
			loading: true,
			delayed: false,
			placeholder: null
		}, _this.setBlob = function (blob) {
			return _this.setState({ blob: blob });
		}, _this.setPlaceholder = function (placeholder) {
			return _this.setState({ placeholder: placeholder });
		}, _this.setLoading = function (loading) {
			return _this.setState({ loading: loading });
		}, _this.delayFetchingImage = function (delayed) {
			return _this.setState({ delayed: delayed });
		}, _this.fetchImage = function (src) {
			fetch(src).then(function (res) {
				return res.blob();
			}).then(function (res) {
				_this.setBlob(URL.createObjectURL(res));
				_this.setLoading(false);
			});
		}, _this.image = function () {
			return _this.imgElement;
		}, _this.fetchOnDemand = function (src) {
			try {
				var observer = new IntersectionObserver(function (entries) {
					var image = entries[0];

					if (image.isIntersecting) {
						_this.fetchImage(src);
						_this.delayFetchingImage(false);
						observer.disconnect();
					}
				});

				observer.observe(_this.image());
			} catch (_) {
				// Fail gracefully
				console.warn('fetchOnDemand not supported on this browser');
				_this.fetchImage(src);
				_this.delayFetchingImage(false);
			}
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	createClass(Image, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    dataSaver = _props.dataSaver,
			    src = _props.src,
			    fetchOnDemand = _props.fetchOnDemand,
			    placeholder = _props.placeholder;

			var _config = config(),
			    getDataSaver = _config.getDataSaver,
			    getFetchOnDemand = _config.getFetchOnDemand;

			// If it's a Cloudinary Image


			if (src && src.includes('cloudinary')) {
				var _placeholder = _placeholder || src.replace('/upload/', '/upload/c_thumb,w_30/');

				this.setPlaceholder(_placeholder);
			}

			if (dataSaver || getDataSaver()) {
				this.delayFetchingImage(true);
			} else if (fetchOnDemand || getFetchOnDemand()) {
				this.delayFetchingImage(true);
				this.fetchOnDemand(src);
			} else {
				this.fetchImage(src);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref2) {
			var dataSaver = _ref2.dataSaver,
			    src = _ref2.src;

			// This will help when toggling DataSaver mode
			var _config2 = config(),
			    getDataSaver = _config2.getDataSaver;

			if (dataSaver || getDataSaver()) {
				this.delayFetchingImage(true);
			} else {
				this.delayFetchingImage(false);
				// this.fetchImage(src)
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props2 = this.props,
			    className = _props2.className,
			    dataSaver = _props2.dataSaver,
			    fetchOnDemand = _props2.fetchOnDemand,
			    placeholderClassName = _props2.placeholderClassName,
			    src = _props2.src,
			    placeholder = _props2.placeholder,
			    rest = objectWithoutProperties(_props2, ['className', 'dataSaver', 'fetchOnDemand', 'placeholderClassName', 'src', 'placeholder']);
			var _state = this.state,
			    blob = _state.blob,
			    delayed = _state.delayed,
			    loading = _state.loading;

			var _config3 = config(),
			    getButtonClassName = _config3.getButtonClassName,
			    getClassName = _config3.getClassName,
			    getDataSaver = _config3.getDataSaver,
			    getPlaceholderClassName = _config3.getPlaceholderClassName,
			    getWrapperClassName = _config3.getWrapperClassName;

			var classes = className ? className + ' ' + (placeholderClassName || getPlaceholderClassName()) : placeholderClassName ? (className || getClassName()) + ' ' + placeholderClassName : getClassName() + ' ' + getPlaceholderClassName();

			if ((dataSaver || getDataSaver()) && loading || delayed) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: getWrapperClassName() },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', _extends({
						className: classes,
						src: placeholder || this.state.placeholder,
						ref: function ref(i) {
							return _this2.imgElement = i;
						}
					}, rest)),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'button',
						{
							className: getButtonClassName(),
							onClick: function onClick() {
								return _this2.fetchImage(_this2.props.src);
							}
						},
						'Load image'
					)
				);
			}

			if (loading) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', _extends({
					className: classes,
					src: placeholder || this.state.placeholder,
					ref: function ref(i) {
						return _this2.imgElement = i;
					}
				}, rest));
			}

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', _extends({
				className: className ? className : getClassName(),
				src: blob
			}, rest));
		}
	}]);
	return Image;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Image.propTypes = {
	src: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Image);
//# sourceMappingURL=pimg.es.js.map


/***/ })

})
//# sourceMappingURL=4.9f2770ea0fc1871f66c5.hot-update.js.map
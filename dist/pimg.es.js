import React from 'react';
import 'whatwg-fetch';

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











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Image = function (_React$Component) {
	inherits(Image, _React$Component);

	function Image() {
		var _ref;

		var _temp, _this, _ret;

		classCallCheck(this, Image);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			loading: true,
			blob: null,
			thumb: null
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	createClass(Image, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var thumb = this.props.src.replace('/upload/', '/upload/t_media_lib_thumb/');

			this.setState({ thumb: thumb });

			fetch(this.props.src).then(function (res) {
				return res.blob();
			}).then(function (res) {
				var blob = URL.createObjectURL(res);
				_this2.setState({ blob: blob, loading: false });
			}).catch(function (err) {
				return console.log(err);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.loading) {
				return React.createElement('img', { className: 'pimg pimg__loading', src: this.state.thumb });
			}

			return React.createElement('img', { className: 'pimg', src: this.state.blob });
		}
	}]);
	return Image;
}(React.Component);

export default Image;
//# sourceMappingURL=pimg.es.js.map

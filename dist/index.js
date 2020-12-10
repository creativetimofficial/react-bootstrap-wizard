"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames4 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isForwardRefComponent = function isForwardRefComponent(component) {
  return _typeof(component) === 'object' && component['$$typeof'] === Symbol["for"]('react.forward_ref');
};

var ReactWizard = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactWizard, _React$Component);

  var _super = _createSuper(ReactWizard);

  function ReactWizard(props) {
    var _this;

    _classCallCheck(this, ReactWizard);

    _this = _super.call(this, props);
    var width;

    if (_this.props.steps.length === 1) {
      width = "100%";
    } else {
      if (window.innerWidth < 600) {
        if (_this.props.steps.length !== 3) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      } else {
        if (_this.props.steps.length === 2) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      }
    }

    _this.state = {
      currentStep: 0,
      highestStep: 0,
      color: _this.props.color !== undefined ? _this.props.color : "primary",
      nextButton: _this.props.steps.length > 1 ? true : false,
      previousButton: false,
      finishButton: _this.props.steps.length === 1 ? true : false,
      width: width,
      wizardData: _this.props.wizardData !== undefined ? _this.props.wizardData : {},
      movingTabStyle: {
        transition: "transform 0s"
      },
      progressbarStyle: {
        width: 100 / _this.props.steps.length / 2 + "%"
      }
    };
    _this.navigationStepChange = _this.navigationStepChange.bind(_assertThisInitialized(_this));
    _this.refreshAnimation = _this.refreshAnimation.bind(_assertThisInitialized(_this));
    _this.previousButtonClick = _this.previousButtonClick.bind(_assertThisInitialized(_this));
    _this.nextButtonClick = _this.nextButtonClick.bind(_assertThisInitialized(_this));
    _this.finishButtonClick = _this.finishButtonClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ReactWizard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshAnimation(0);
      window.addEventListener("resize", this.updateWidth.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isCancelled = true;
      window.removeEventListener("resize", this.updateWidth);
      var id = window.setTimeout(null, 0);

      while (id--) {
        window.clearTimeout(id);
      }
    }
  }, {
    key: "updateWidth",
    value: function updateWidth() {
      var _this2 = this;

      !this.isCancelled && setTimeout(function () {
        return _this2.refreshAnimation(_this2.state.currentStep);
      }, 200);
    }
  }, {
    key: "navigationStepChange",
    value: function () {
      var _navigationStepChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key) {
        var validationState, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.props.navSteps) {
                  _context.next = 18;
                  break;
                }

                validationState = true;

                if (!(this.props.validate && key > this.state.currentStep)) {
                  _context.next = 17;
                  break;
                }

                i = this.state.currentStep;

              case 4:
                if (!(i < key)) {
                  _context.next = 17;
                  break;
                }

                _context.t0 = this.refs[this.props.steps[i].stepName].isValidated !== undefined;

                if (!_context.t0) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return this.refs[this.props.steps[i].stepName].isValidated();

              case 9:
                _context.t1 = _context.sent;
                _context.t0 = _context.t1 === false;

              case 11:
                if (!_context.t0) {
                  _context.next = 14;
                  break;
                }

                validationState = false;
                return _context.abrupt("break", 17);

              case 14:
                i++;
                _context.next = 4;
                break;

              case 17:
                if (validationState) {
                  this.setState({
                    wizardData: _objectSpread(_objectSpread({}, this.state.wizardData), {}, _defineProperty({}, this.props.steps[this.state.currentStep].stepName, this.refs[this.props.steps[this.state.currentStep].stepName].state)),
                    currentStep: key,
                    highestStep: key > this.state.highestStep ? key : this.state.highestStep,
                    nextButton: this.props.steps.length > key + 1 ? true : false,
                    previousButton: key > 0 ? true : false,
                    finishButton: this.props.steps.length === key + 1 ? true : false
                  });
                  this.refreshAnimation(key);
                }

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function navigationStepChange(_x) {
        return _navigationStepChange.apply(this, arguments);
      }

      return navigationStepChange;
    }()
  }, {
    key: "nextButtonClick",
    value: function () {
      var _nextButtonClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var key;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t2 = this.props.validate;

                if (!_context2.t2) {
                  _context2.next = 11;
                  break;
                }

                _context2.t4 = this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined;

                if (!_context2.t4) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return this.refs[this.props.steps[this.state.currentStep].stepName].isValidated();

              case 6:
                _context2.t4 = _context2.sent;

              case 7:
                _context2.t3 = _context2.t4;

                if (_context2.t3) {
                  _context2.next = 10;
                  break;
                }

                _context2.t3 = this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined;

              case 10:
                _context2.t2 = _context2.t3;

              case 11:
                _context2.t1 = _context2.t2;

                if (_context2.t1) {
                  _context2.next = 14;
                  break;
                }

                _context2.t1 = this.props.validate === undefined;

              case 14:
                _context2.t0 = _context2.t1;

                if (_context2.t0) {
                  _context2.next = 17;
                  break;
                }

                _context2.t0 = !this.props.validate;

              case 17:
                if (!_context2.t0) {
                  _context2.next = 21;
                  break;
                }

                key = this.state.currentStep + 1;
                this.setState({
                  wizardData: _objectSpread(_objectSpread({}, this.state.wizardData), {}, _defineProperty({}, this.props.steps[this.state.currentStep].stepName, this.refs[this.props.steps[this.state.currentStep].stepName].state)),
                  currentStep: key,
                  highestStep: key > this.state.highestStep ? key : this.state.highestStep,
                  nextButton: this.props.steps.length > key + 1 ? true : false,
                  previousButton: key > 0 ? true : false,
                  finishButton: this.props.steps.length === key + 1 ? true : false
                });
                this.refreshAnimation(key);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function nextButtonClick() {
        return _nextButtonClick.apply(this, arguments);
      }

      return nextButtonClick;
    }()
  }, {
    key: "previousButtonClick",
    value: function previousButtonClick() {
      var key = this.state.currentStep - 1;

      if (key >= 0) {
        this.setState({
          wizardData: _objectSpread(_objectSpread({}, this.state.wizardData), {}, _defineProperty({}, this.props.steps[this.state.currentStep].stepName, this.refs[this.props.steps[this.state.currentStep].stepName].state)),
          currentStep: key,
          highestStep: key > this.state.highestStep ? key : this.state.highestStep,
          nextButton: this.props.steps.length > key + 1 ? true : false,
          previousButton: key > 0 ? true : false,
          finishButton: this.props.steps.length === key + 1 ? true : false
        });
        this.refreshAnimation(key);
      }
    }
  }, {
    key: "finishButtonClick",
    value: function () {
      var _finishButtonClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = this.props.validate === false && this.props.finishButtonClick !== undefined;

                if (_context3.t0) {
                  _context3.next = 17;
                  break;
                }

                _context3.t2 = this.props.validate;

                if (!_context3.t2) {
                  _context3.next = 13;
                  break;
                }

                _context3.t4 = this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined;

                if (!_context3.t4) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 8;
                return this.refs[this.props.steps[this.state.currentStep].stepName].isValidated();

              case 8:
                _context3.t4 = _context3.sent;

              case 9:
                _context3.t3 = _context3.t4;

                if (_context3.t3) {
                  _context3.next = 12;
                  break;
                }

                _context3.t3 = this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined;

              case 12:
                _context3.t2 = _context3.t3;

              case 13:
                _context3.t1 = _context3.t2;

                if (!_context3.t1) {
                  _context3.next = 16;
                  break;
                }

                _context3.t1 = this.props.finishButtonClick !== undefined;

              case 16:
                _context3.t0 = _context3.t1;

              case 17:
                if (!_context3.t0) {
                  _context3.next = 19;
                  break;
                }

                this.setState({
                  progressbarStyle: {
                    width: "100%"
                  },
                  wizardData: _objectSpread(_objectSpread({}, this.state.wizardData), {}, _defineProperty({}, this.props.steps[this.state.currentStep].stepName, this.refs[this.props.steps[this.state.currentStep].stepName].state))
                }, function () {
                  _this3.props.finishButtonClick(_this3.state.wizardData);
                });

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function finishButtonClick() {
        return _finishButtonClick.apply(this, arguments);
      }

      return finishButtonClick;
    }()
  }, {
    key: "refreshAnimation",
    value: function refreshAnimation(index) {
      var total = this.props.steps.length;
      var li_width = 100 / total;
      var total_steps = this.props.steps !== undefined ? this.props.steps.length : 0;
      var move_distance = this.refs.wizard !== undefined ? this.refs.navStepsLi.children[0].clientWidth / total_steps : 0;
      var index_temp = index;
      var vertical_level = 0;
      var mobile_device = window.innerWidth < 600 && total > 3;

      if (mobile_device) {
        move_distance = this.refs.navStepsLi.children[0].clientWidth / 2;
        index_temp = index % 2;
        li_width = 50;
      }

      this.setState({
        width: li_width + "%"
      });
      var step_width = move_distance;
      move_distance = move_distance * index_temp;

      if (mobile_device) {
        vertical_level = parseInt(index / 2);
        vertical_level = vertical_level * 38;
      }

      var movingTabStyle = {
        width: step_width,
        transform: "translate3d(" + move_distance + "px, " + vertical_level + "px, 0)",
        transition: "all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)"
      };
      this.setState({
        movingTabStyle: movingTabStyle,
        progressbarStyle: {
          width: move_distance + step_width / 2
        }
      });
    }
  }, {
    key: "renderComponent",
    value: function renderComponent(prop) {
      var component = prop.component,
          stepProps = prop.stepProps,
          stepName = prop.stepName;

      if (typeof component === 'function' || isForwardRefComponent(component)) {
        return /*#__PURE__*/_react["default"].createElement(prop.component, _extends({
          ref: stepName,
          wizardData: this.state.wizardData
        }, stepProps));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: stepName
      }, component);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "wizard-container",
        ref: "wizard"
      }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Card, {
        className: "card card-wizard active",
        "data-color": this.state.color
      }, /*#__PURE__*/_react["default"].createElement(_reactstrap.CardHeader, {
        className: this.props.headerTextCenter !== undefined ? "text-center" : "",
        "data-background-color": this.state.color
      }, this.props.title !== undefined ? /*#__PURE__*/_react["default"].createElement(_reactstrap.CardTitle, {
        tag: "h3"
      }, this.props.title) : null, this.props.description !== undefined ? /*#__PURE__*/_react["default"].createElement("h3", {
        className: "description"
      }, this.props.description) : null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "wizard-navigation",
        ref: "navStepsLi"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "progress-with-circle"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "progress-bar",
        role: "progressbar",
        style: this.state.progressbarStyle
      })), /*#__PURE__*/_react["default"].createElement(_reactstrap.Nav, {
        pills: true
      }, this.props.steps.map(function (prop, key) {
        return /*#__PURE__*/_react["default"].createElement(_reactstrap.NavItem, {
          key: key,
          style: {
            width: _this4.state.width
          }
        }, /*#__PURE__*/_react["default"].createElement(_reactstrap.NavLink, {
          className: (0, _classnames4["default"])({
            active: key === _this4.state.currentStep
          }, {
            checked: key <= _this4.state.highestStep
          }),
          onClick: function onClick() {
            return _this4.navigationStepChange(key);
          }
        }, prop.stepIcon !== undefined && prop.stepIcon !== "" ? /*#__PURE__*/_react["default"].createElement("i", {
          className: prop.stepIcon
        }) : null, _this4.props.progressbar ? /*#__PURE__*/_react["default"].createElement("p", null, prop.stepName) : prop.stepName));
      })), this.props.progressbar ? null : /*#__PURE__*/_react["default"].createElement("div", {
        className: "moving-tab",
        style: this.state.movingTabStyle
      }, this.props.steps[this.state.currentStep].stepIcon !== undefined && this.props.steps[this.state.currentStep].stepIcon !== "" ? /*#__PURE__*/_react["default"].createElement("i", {
        className: this.props.steps[this.state.currentStep].stepIcon
      }) : null, this.props.steps[this.state.currentStep].stepName))), /*#__PURE__*/_react["default"].createElement(_reactstrap.CardBody, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.TabContent, {
        activeTab: this.state.currentStep
      }, this.props.steps.map(function (prop, key) {
        return /*#__PURE__*/_react["default"].createElement(_reactstrap.TabPane, {
          tabId: key,
          key: key,
          className: (0, _classnames4["default"])("fade", {
            show: _this4.state.currentStep === key
          })
        }, _this4.renderComponent(prop));
      }))), /*#__PURE__*/_react["default"].createElement(_reactstrap.CardFooter, null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          "float": "right"
        }
      }, this.state.nextButton ? /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
        className: (0, _classnames4["default"])("btn-next", _defineProperty({}, this.props.nextButtonClasses, this.props.nextButtonClasses !== undefined)),
        onClick: function onClick() {
          return _this4.nextButtonClick();
        }
      }, this.props.nextButtonText !== undefined ? this.props.nextButtonText : "Next") : null, this.state.finishButton ? /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
        className: (0, _classnames4["default"])("btn-finish d-inline-block", _defineProperty({}, this.props.finishButtonClasses, this.props.finishButtonClasses !== undefined)),
        onClick: function onClick() {
          return _this4.finishButtonClick();
        }
      }, this.props.finishButtonText !== undefined ? this.props.finishButtonText : "Finish") : null), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          "float": "left"
        }
      }, this.state.previousButton ? /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
        className: (0, _classnames4["default"])("btn-previous", _defineProperty({}, this.props.previousButtonClasses, this.props.previousButtonClasses !== undefined)),
        onClick: function onClick() {
          return _this4.previousButtonClick();
        }
      }, this.props.previousButtonText !== undefined ? this.props.previousButtonText : "Previous") : null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix"
      }))));
    }
  }]);

  return ReactWizard;
}(_react["default"].Component);

ReactWizard.defaultProps = {
  validate: false,
  previousButtonText: "Previous",
  finishButtonText: "Finish",
  nextButtonText: "Next",
  color: "primary",
  progressbar: false
};
ReactWizard.propTypes = {
  color: _propTypes["default"].oneOf(["primary", "green", "orange", "red", "blue"]),
  previousButtonClasses: _propTypes["default"].string,
  finishButtonClasses: _propTypes["default"].string,
  nextButtonClasses: _propTypes["default"].string,
  headerTextCenter: _propTypes["default"].bool,
  navSteps: _propTypes["default"].bool,
  validate: _propTypes["default"].bool,
  finishButtonClick: _propTypes["default"].func,
  previousButtonText: _propTypes["default"].node,
  finishButtonText: _propTypes["default"].node,
  nextButtonText: _propTypes["default"].node,
  title: _propTypes["default"].node,
  description: _propTypes["default"].node,
  progressbar: _propTypes["default"].bool,
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    stepName: _propTypes["default"].string.isRequired,
    stepIcon: _propTypes["default"].string,
    component: _propTypes["default"].oneOfType([_propTypes["default"].func, function (props, key, componentName, location, propFullName) {
      if (!isForwardRefComponent(props.component)) {
        return new Error("Invalid prop ".concat(propFullName, " supplied to ").concat(componentName, ". Validation failed."));
      }
    }]),
    stepProps: _propTypes["default"].object
  })).isRequired
};
var _default = ReactWizard;
exports["default"] = _default;

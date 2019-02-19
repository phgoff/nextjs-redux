webpackHotUpdate("static\\development\\pages\\number.js",{

/***/ "./pages/number.js":
/*!*************************!*\
  !*** ./pages/number.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");





var _jsxFileName = "C:\\Users\\coc\\Desktop\\nextworkshop\\pages\\number.js";




var Number =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Number, _React$Component);

  function Number(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Number);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Number).call(this, props));
  } // handleIncreaseNumber = () =>{
  //     let { number } = this.state; 
  //     number = number + 1;
  //     this.setState({number})
  // }
  // handleDecreaseNumber = () =>{
  //     let number = this.state.number;
  //     number = number - 1;
  //     this.setState({number})
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Number, [{
    key: "render",
    value: function render() {
      // const {number} = this.state;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Number: ", number, " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.props.increaseNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, " + "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.props.decreaseNumber,
        style: {
          marginLeft: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " - "));
    }
  }]);

  return Number;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    number: state.number
  };
};

var mapActionsToProps = {
  increaseNumber: _redux_actions__WEBPACK_IMPORTED_MODULE_7__["increaseNumber"],
  decreaseNumber: _redux_actions__WEBPACK_IMPORTED_MODULE_7__["decreaseNumber"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapActionsToProps)(Number));

/***/ })

})
//# sourceMappingURL=number.js.48c668ba1dc264ff6648.hot-update.js.map
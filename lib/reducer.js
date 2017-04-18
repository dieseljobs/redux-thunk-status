'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('./actionTypes');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createReducer = function createReducer() {

  var behaviors = _defineProperty({}, _actionTypes.SET_LOADING, function (state, _ref) {
    var key = _ref.key,
        val = _ref.val;

    var newKeyState = Object.assign({}, state[key], { loading: val });

    return Object.assign({}, _defineProperty({}, key, newKeyState));
  });

  var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var behavior = behaviors[action.type];

    return behavior ? behavior(state, action) : state;
  };

  return reducer;
};

exports.default = createReducer;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.captureStatus = exports.setLoading = undefined;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Set loading status
 *
 * @param {string} key
 * @param {boolean} val
 */
var setLoading = exports.setLoading = function setLoading(key, val) {
  return {
    type: types.SET_LOADING,
    key: key,
    val: val
  };
};

/**
 * Wrapper function to capture status from async action
 * Expects async action to return a Promise
 *
 * @param  {String} name
 * @param  {Function} dispatchFunction
 * @return {Function}
 */
var captureStatus = exports.captureStatus = function captureStatus(name, dispatchFunction) {
  return function (dispatch, getState) {
    dispatch(setLoading(name, true));
    dispatchFunction(dispatch, getState).then(function (response) {
      dispatch(setLoading(name, false));
    }).catch(function (error) {
      dispatch(setLoading(name, false));
    });
  };
};
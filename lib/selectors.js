'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoadingStatus = exports.getStatus = exports.stateBranch = undefined;

var _reselect = require('reselect');

/**
 * Select state branch
 * Expects 'async' key of state.  If not set, expects the state argument to
 * supply a custom state branch.  In that case, just return the state argument
 * object
 *
 * @param  {Object} state
 * @return {Object}
 */
var stateBranch = exports.stateBranch = function stateBranch(state) {
  return state.async || state;
};

/**
 * Creates 'createSelector' method to get the status of a reported action
 * by its stored key
 *
 * @param  {String} key
 * @return {Function}
 */
var getStatus = exports.getStatus = function getStatus(key) {
  return (0, _reselect.createSelector)(stateBranch, function (state) {
    return state[key] || {};
  });
};

/**
 * Creates 'createSelector' method to get the loading state of a reported
 * actions by its stored key
 *
 * @param  {String} key
 * @return {Function}
 */
var getLoadingStatus = exports.getLoadingStatus = function getLoadingStatus(key) {
  return (0, _reselect.createSelector)(getStatus(key), function (status) {
    return status.loading || false;
  });
};
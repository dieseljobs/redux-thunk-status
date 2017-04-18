'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.getLoadingStatus = exports.getStatus = exports.captureStatus = exports.AwaitLoading = exports.actionTypes = undefined;

var _createAll2 = require('./createAll');

var _createAll3 = _interopRequireDefault(_createAll2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createAll = (0, _createAll3.default)();

var actionTypes = _createAll.actionTypes,
    AwaitLoading = _createAll.AwaitLoading,
    captureStatus = _createAll.captureStatus,
    getStatus = _createAll.getStatus,
    getLoadingStatus = _createAll.getLoadingStatus,
    reducer = _createAll.reducer;
exports.actionTypes = actionTypes;
exports.AwaitLoading = AwaitLoading;
exports.captureStatus = captureStatus;
exports.getStatus = getStatus;
exports.getLoadingStatus = getLoadingStatus;
exports.reducer = reducer;
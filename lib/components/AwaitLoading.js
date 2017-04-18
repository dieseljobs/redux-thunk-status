'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AwaitLoading = function AwaitLoading(props) {
  var loading = props.loading,
      children = props.children,
      Component = props.component;


  if (loading && Component) {
    return _react2.default.createElement(Component, null);
  } else if (loading && !Component) {
    return _react2.default.createElement(
      'div',
      null,
      'loading...'
    );
  } else {
    return children;
  }
};

AwaitLoading.propTypes = {
  loading: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.object.isRequired,
  component: _propTypes2.default.func
};

exports.default = AwaitLoading;
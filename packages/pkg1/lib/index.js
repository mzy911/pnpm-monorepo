"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _pkg() {
  const data = _interopRequireDefault(require("@mzy123/pkg2"));
  _pkg = function _pkg() {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// pkg1/src/index.ts

function fun2() {
  (0, _pkg().default)();
  console.log('I am package 1', 1);
}
var _default = fun2;
exports.default = _default;
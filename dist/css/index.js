"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathToCss = _path.default.join(__dirname, '/index.css');

var css = _fs.default.readFileSync(pathToCss, 'utf8');

var _default = () => css;

exports.default = _default;
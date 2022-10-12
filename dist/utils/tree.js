"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = void 0;
var _tree = _interopRequireDefault(require("../data/tree.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAll = () => {
  return _tree.default;
};
exports.getAll = getAll;
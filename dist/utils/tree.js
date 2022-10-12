"use strict";

require("core-js/modules/es.array.push.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTreeByCode = exports.getAll = void 0;
var _tree = _interopRequireDefault(require("../data/tree.json"));
var _province = require("./province");
var _district = require("./district");
var _commune = require("./commune");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const getAll = () => {
  return _tree.default;
};
exports.getAll = getAll;
const getTreeByCode = (pCode, dCode, cCode) => {
  const province = (0, _province.findProvinceByCode)(pCode)[0];
  if (!province) {
    return null;
  }
  const district = (0, _district.findDistrictByCode)(dCode)[0];
  if (!district) {
    return null;
  }
  const commune = (0, _commune.findCommuneByCode)(cCode)[0];
  if (!commune) {
    return null;
  }
  let result = _objectSpread({}, province);
  result["quan-huyen"] = district;
  result["quan-huyen"]["xa-phuong"] = commune;
  return result;
};
exports.getTreeByCode = getTreeByCode;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getAll", {
  enumerable: true,
  get: function get() {
    return _tree.getAll;
  }
});
Object.defineProperty(exports, "getAllCommune", {
  enumerable: true,
  get: function get() {
    return _commune.getAllCommune;
  }
});
Object.defineProperty(exports, "getAllDistrict", {
  enumerable: true,
  get: function get() {
    return _district.getAllDistrict;
  }
});
Object.defineProperty(exports, "getAllProvince", {
  enumerable: true,
  get: function get() {
    return _province.getAllProvince;
  }
});
Object.defineProperty(exports, "getCommuneByCode", {
  enumerable: true,
  get: function get() {
    return _commune.getCommuneByCode;
  }
});
Object.defineProperty(exports, "getCommuneName", {
  enumerable: true,
  get: function get() {
    return _commune.getCommuneName;
  }
});
Object.defineProperty(exports, "getCommuneNameWithType", {
  enumerable: true,
  get: function get() {
    return _commune.getCommuneNameWithType;
  }
});
Object.defineProperty(exports, "getCommunePath", {
  enumerable: true,
  get: function get() {
    return _commune.getCommunePath;
  }
});
Object.defineProperty(exports, "getCommunePathWithType", {
  enumerable: true,
  get: function get() {
    return _commune.getCommunePathWithType;
  }
});
Object.defineProperty(exports, "getDistrictByCode", {
  enumerable: true,
  get: function get() {
    return _district.getDistrictByCode;
  }
});
Object.defineProperty(exports, "getDistrictName", {
  enumerable: true,
  get: function get() {
    return _district.getDistrictName;
  }
});
Object.defineProperty(exports, "getDistrictNameWithType", {
  enumerable: true,
  get: function get() {
    return _district.getDistrictNameWithType;
  }
});
Object.defineProperty(exports, "getDistrictPath", {
  enumerable: true,
  get: function get() {
    return _district.getDistrictPath;
  }
});
Object.defineProperty(exports, "getDistrictPathWithType", {
  enumerable: true,
  get: function get() {
    return _district.getDistrictPathWithType;
  }
});
Object.defineProperty(exports, "getListCommuneByParentCode", {
  enumerable: true,
  get: function get() {
    return _commune.getListCommuneByParentCode;
  }
});
Object.defineProperty(exports, "getListDistrictByParentCode", {
  enumerable: true,
  get: function get() {
    return _district.getListDistrictByParentCode;
  }
});
Object.defineProperty(exports, "getProvinceByCode", {
  enumerable: true,
  get: function get() {
    return _province.getProvinceByCode;
  }
});
Object.defineProperty(exports, "getProvinceName", {
  enumerable: true,
  get: function get() {
    return _province.getProvinceName;
  }
});
Object.defineProperty(exports, "getProvinceNameWithType", {
  enumerable: true,
  get: function get() {
    return _province.getProvinceNameWithType;
  }
});
exports.getTreeByCode = void 0;
var _tree = require("./tree");
var _province = require("./province");
var _district = require("./district");
var _commune = require("./commune");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const getTreeByCode = (pCode, dCode, cCode) => {
  const province = (0, _province.getProvinceByCode)(pCode)[0];
  if (!province) {
    return null;
  }
  const district = (0, _district.getDistrictByCode)(dCode)[0];
  if (!district) {
    return null;
  }
  const commune = (0, _commune.getCommuneByCode)(cCode)[0];
  if (!commune) {
    return null;
  }
  let result = _objectSpread({}, province);
  result["quan-huyen"] = district;
  result["quan-huyen"]["xa-phuong"] = commune;
  return result;
};
exports.getTreeByCode = getTreeByCode;
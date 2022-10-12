"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProvinceNameWithType = exports.getProvinceName = exports.getProvinceByCode = exports.getAllProvince = void 0;
var _provinces = _interopRequireDefault(require("../data/provinces.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAllProvince = () => {
  return _provinces.default;
};
exports.getAllProvince = getAllProvince;
const getProvinceByCode = code => {
  return _provinces.default.filter(item => item.code === code);
};
exports.getProvinceByCode = getProvinceByCode;
const getProvinceName = code => {
  const province = _provinces.default.filter(item => item.code === code);
  return !!province.length ? province[0].name : "";
};
exports.getProvinceName = getProvinceName;
const getProvinceNameWithType = code => {
  const province = _provinces.default.filter(item => item.code === code);
  return !!province.length ? province[0].name_with_type : "";
};
exports.getProvinceNameWithType = getProvinceNameWithType;
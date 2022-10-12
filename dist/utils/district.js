"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListDistrictByParentCode = exports.getDistrictPathWithType = exports.getDistrictPath = exports.getDistrictNameWithType = exports.getDistrictName = exports.getDistrictByCode = exports.getAllDistrict = void 0;
var _districts = _interopRequireDefault(require("../data/districts.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAllDistrict = () => {
  return _districts.default;
};
exports.getAllDistrict = getAllDistrict;
const getDistrictByCode = code => {
  return _districts.default.filter(item => item.code === code);
};
exports.getDistrictByCode = getDistrictByCode;
const getDistrictName = code => {
  const district = _districts.default.filter(item => item.code === code);
  return !!district.length ? district[0].name : "";
};
exports.getDistrictName = getDistrictName;
const getDistrictNameWithType = code => {
  const district = _districts.default.filter(item => item.code === code);
  return !!district.length ? district[0].name_with_type : "";
};
exports.getDistrictNameWithType = getDistrictNameWithType;
const getListDistrictByParentCode = code => {
  return _districts.default.filter(item => item.parent_code === code);
};
exports.getListDistrictByParentCode = getListDistrictByParentCode;
const getDistrictPath = code => {
  const district = _districts.default.filter(item => item.code === code);
  return !!district.length ? district[0].path : "";
};
exports.getDistrictPath = getDistrictPath;
const getDistrictPathWithType = code => {
  const district = _districts.default.filter(item => item.code === code);
  return !!district.length ? district[0].path_with_type : "";
};
exports.getDistrictPathWithType = getDistrictPathWithType;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListCommuneByParentCode = exports.getCommunePathWithType = exports.getCommunePath = exports.getCommuneNameWithType = exports.getCommuneName = exports.getAllCommune = exports.findCommuneByName = exports.findCommuneByCode = void 0;
var _communes = _interopRequireDefault(require("../data/communes.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAllCommune = () => {
  return _communes.default;
};
exports.getAllCommune = getAllCommune;
const findCommuneByCode = code => {
  return _communes.default.filter(item => item.code === code);
};
exports.findCommuneByCode = findCommuneByCode;
const findCommuneByName = name => {
  return _communes.default.filter(item => item.name === name);
};
exports.findCommuneByName = findCommuneByName;
const getCommuneName = code => {
  const commune = _communes.default.filter(item => item.code === code);
  return !!commune.length ? commune[0].name : "";
};
exports.getCommuneName = getCommuneName;
const getCommuneNameWithType = code => {
  const commune = _communes.default.filter(item => item.code === code);
  return !!commune.length ? commune[0].name_with_type : "";
};
exports.getCommuneNameWithType = getCommuneNameWithType;
const getListCommuneByParentCode = code => {
  return _communes.default.filter(item => item.parent_code === code);
};
exports.getListCommuneByParentCode = getListCommuneByParentCode;
const getCommunePath = code => {
  const commune = _communes.default.filter(item => item.code === code);
  return !!commune.length ? commune[0].path : "";
};
exports.getCommunePath = getCommunePath;
const getCommunePathWithType = code => {
  const commune = _communes.default.filter(item => item.code === code);
  return !!commune.length ? commune[0].path_with_type : "";
};
exports.getCommunePathWithType = getCommunePathWithType;
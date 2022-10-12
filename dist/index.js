"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SelectCommune", {
  enumerable: true,
  get: function get() {
    return _SelectCommune.default;
  }
});
Object.defineProperty(exports, "SelectDistrict", {
  enumerable: true,
  get: function get() {
    return _SelectDistrict.default;
  }
});
Object.defineProperty(exports, "SelectProvince", {
  enumerable: true,
  get: function get() {
    return _SelectProvince.default;
  }
});
exports.vnad = void 0;
var _SelectProvince = _interopRequireDefault(require("./components/SelectProvince"));
var _SelectDistrict = _interopRequireDefault(require("./components/SelectDistrict"));
var _SelectCommune = _interopRequireDefault(require("./components/SelectCommune"));
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const vnad = {
  getAll: _utils.getAll,
  getAllProvince: _utils.getAllProvince,
  getProvinceByCode: _utils.getProvinceByCode,
  getProvinceName: _utils.getProvinceName,
  getProvinceNameWithType: _utils.getProvinceNameWithType,
  getAllDistrict: _utils.getAllDistrict,
  getDistrictByCode: _utils.getDistrictByCode,
  getDistrictName: _utils.getDistrictName,
  getDistrictNameWithType: _utils.getDistrictNameWithType,
  getListDistrictByParentCode: _utils.getListDistrictByParentCode,
  getDistrictPath: _utils.getDistrictPath,
  getDistrictPathWithType: _utils.getDistrictPathWithType,
  getAllCommune: _utils.getAllCommune,
  getCommuneByCode: _utils.getCommuneByCode,
  getCommuneName: _utils.getCommuneName,
  getCommuneNameWithType: _utils.getCommuneNameWithType,
  getListCommuneByParentCode: _utils.getListCommuneByParentCode,
  getCommunePath: _utils.getCommunePath,
  getCommunePathWithType: _utils.getCommunePathWithType,
  getTreeByCode: _utils.getTreeByCode
};
exports.vnad = vnad;
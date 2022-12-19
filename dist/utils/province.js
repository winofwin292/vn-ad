"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinceNameWithType = exports.getProvinceName = exports.findProvinceByName = exports.findProvinceByCode = exports.getAllProvince = void 0;
var provinces_json_1 = __importDefault(require("../data/provinces.json"));
var getAllProvince = function () {
    return provinces_json_1.default;
};
exports.getAllProvince = getAllProvince;
var findProvinceByCode = function (code) {
    return provinces_json_1.default.filter(function (item) { return item.code === code; });
};
exports.findProvinceByCode = findProvinceByCode;
var findProvinceByName = function (name) {
    return provinces_json_1.default.filter(function (item) { return item.name === name; });
};
exports.findProvinceByName = findProvinceByName;
var getProvinceName = function (code) {
    var province = provinces_json_1.default.filter(function (item) { return item.code === code; });
    return !!province.length ? province[0].name : "";
};
exports.getProvinceName = getProvinceName;
var getProvinceNameWithType = function (code) {
    var province = provinces_json_1.default.filter(function (item) { return item.code === code; });
    return !!province.length ? province[0].name_with_type : "";
};
exports.getProvinceNameWithType = getProvinceNameWithType;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistrictPathWithType = exports.getDistrictPath = exports.getListDistrictByParentCode = exports.getDistrictNameWithType = exports.getDistrictName = exports.findDistrictByName = exports.findDistrictByCode = exports.getAllDistrict = void 0;
var districts_json_1 = __importDefault(require("../data/districts.json"));
var getAllDistrict = function () {
    return districts_json_1.default;
};
exports.getAllDistrict = getAllDistrict;
var findDistrictByCode = function (code) {
    return districts_json_1.default.filter(function (item) { return item.code === code; });
};
exports.findDistrictByCode = findDistrictByCode;
var findDistrictByName = function (name) {
    return districts_json_1.default.filter(function (item) { return item.name === name; });
};
exports.findDistrictByName = findDistrictByName;
var getDistrictName = function (code) {
    var district = districts_json_1.default.filter(function (item) { return item.code === code; });
    return !!district.length ? district[0].name : "";
};
exports.getDistrictName = getDistrictName;
var getDistrictNameWithType = function (code) {
    var district = districts_json_1.default.filter(function (item) { return item.code === code; });
    return !!district.length ? district[0].name_with_type : "";
};
exports.getDistrictNameWithType = getDistrictNameWithType;
var getListDistrictByParentCode = function (code) {
    return districts_json_1.default.filter(function (item) { return item.parent_code === code; });
};
exports.getListDistrictByParentCode = getListDistrictByParentCode;
var getDistrictPath = function (code) {
    var district = districts_json_1.default.filter(function (item) { return item.code === code; });
    return !!district.length ? district[0].path : "";
};
exports.getDistrictPath = getDistrictPath;
var getDistrictPathWithType = function (code) {
    var district = districts_json_1.default.filter(function (item) { return item.code === code; });
    return !!district.length ? district[0].path_with_type : "";
};
exports.getDistrictPathWithType = getDistrictPathWithType;

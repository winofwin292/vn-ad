"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWardPathWithType = exports.getWardPath = exports.getListWardByParentCode = exports.getWardNameWithType = exports.getWardName = exports.findWardByName = exports.findWardByCode = exports.getAllWard = void 0;
var wards_json_1 = __importDefault(require("../data/wards.json"));
var getAllWard = function () {
    return wards_json_1.default;
};
exports.getAllWard = getAllWard;
var findWardByCode = function (code) {
    return wards_json_1.default.filter(function (item) { return item.code === code; });
};
exports.findWardByCode = findWardByCode;
var findWardByName = function (name) {
    return wards_json_1.default.filter(function (item) { return item.name === name; });
};
exports.findWardByName = findWardByName;
var getWardName = function (code) {
    var ward = wards_json_1.default.filter(function (item) { return item.code === code; });
    return !!ward.length ? ward[0].name : "";
};
exports.getWardName = getWardName;
var getWardNameWithType = function (code) {
    var ward = wards_json_1.default.filter(function (item) { return item.code === code; });
    return !!ward.length ? ward[0].name_with_type : "";
};
exports.getWardNameWithType = getWardNameWithType;
var getListWardByParentCode = function (code) {
    return wards_json_1.default.filter(function (item) { return item.parent_code === code; });
};
exports.getListWardByParentCode = getListWardByParentCode;
var getWardPath = function (code) {
    var ward = wards_json_1.default.filter(function (item) { return item.code === code; });
    return !!ward.length ? ward[0].path : "";
};
exports.getWardPath = getWardPath;
var getWardPathWithType = function (code) {
    var ward = wards_json_1.default.filter(function (item) { return item.code === code; });
    return !!ward.length ? ward[0].path_with_type : "";
};
exports.getWardPathWithType = getWardPathWithType;

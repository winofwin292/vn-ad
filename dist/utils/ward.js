"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWardPathWithType = exports.getWardPath = exports.getListWardByProvinceCode = exports.getWardNameWithType = exports.getWardName = exports.findWardByName = exports.findWardByCode = exports.getAllWards = void 0;
var wards_json_1 = __importDefault(require("../data/wards.json"));
/**
 * @description Get all wards
 * @returns {Ward[]}
 */
function getAllWards() {
    return wards_json_1.default;
}
exports.getAllWards = getAllWards;
/**
 * @description Find ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {Ward[]}
 */
function findWardByCode(ward_code) {
    return wards_json_1.default.filter(function (item) { return item.ward_code === ward_code; });
}
exports.findWardByCode = findWardByCode;
/**
 * @description Find ward by name
 * @param {string} name - The name of the ward
 * @returns {Ward[]}
 */
function findWardByName(name) {
    return wards_json_1.default.filter(function (item) { return item.name === name; });
}
exports.findWardByName = findWardByName;
/**
 * @description Get the name of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
function getWardName(ward_code) {
    var ward = wards_json_1.default.find(function (item) { return item.ward_code === ward_code; });
    return ward ? ward.name : '';
}
exports.getWardName = getWardName;
/**
 * @description Get the name with type of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
function getWardNameWithType(ward_code) {
    var ward = wards_json_1.default.find(function (item) { return item.ward_code === ward_code; });
    return ward ? ward.name_with_type : '';
}
exports.getWardNameWithType = getWardNameWithType;
/**
 * @description Get list of wards by province_code
 * @param {string} code - The province code of the wards
 * @returns {Ward[]}
 */
function getListWardByProvinceCode(province_code) {
    return wards_json_1.default.filter(function (item) { return item.province_code === province_code; });
}
exports.getListWardByProvinceCode = getListWardByProvinceCode;
/**
 * @description Get the path of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
function getWardPath(ward_code) {
    var ward = wards_json_1.default.find(function (item) { return item.ward_code === ward_code; });
    return ward ? ward.path : '';
}
exports.getWardPath = getWardPath;
/**
 * @description Get the path with type of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
function getWardPathWithType(ward_code) {
    var ward = wards_json_1.default.find(function (item) { return item.ward_code === ward_code; });
    return ward ? ward.path_with_type : '';
}
exports.getWardPathWithType = getWardPathWithType;

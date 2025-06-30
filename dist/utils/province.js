"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinceNameWithType = exports.getProvinceName = exports.findProvinceByName = exports.findProvinceByCode = exports.getAllProvinces = void 0;
var provinces_json_1 = __importDefault(require("../data/provinces.json"));
/**
 * @description Get all provinces
 * @returns {Province[]}
 */
function getAllProvinces() {
    return provinces_json_1.default;
}
exports.getAllProvinces = getAllProvinces;
/**
 * @description Find province by province_code
 * @param {string} province_code - The code of the province
 * @returns {Province[]}
 */
function findProvinceByCode(province_code) {
    return provinces_json_1.default.filter(function (item) { return item.province_code === province_code; });
}
exports.findProvinceByCode = findProvinceByCode;
/**
 * @description Find province by name
 * @param {string} name - The name of the province
 * @returns {Province[]}
 */
function findProvinceByName(name) {
    return provinces_json_1.default.filter(function (item) { return item.name === name; });
}
exports.findProvinceByName = findProvinceByName;
/**
 * @description Get the name of the province by province_code
 * @param {string} province_code - The code of the province
 * @returns {string}
 */
function getProvinceName(province_code) {
    var province = provinces_json_1.default.find(function (item) { return item.province_code === province_code; });
    return province ? province.name : '';
}
exports.getProvinceName = getProvinceName;
/**
 * @description Get the name with type of the province by province_code
 * @param {string} province_code - The code of the province
 * @returns {string}
 */
function getProvinceNameWithType(province_code) {
    var province = provinces_json_1.default.find(function (item) { return item.province_code === province_code; });
    return province ? province.name_with_type : '';
}
exports.getProvinceNameWithType = getProvinceNameWithType;

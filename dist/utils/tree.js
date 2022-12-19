"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTreeByCode = exports.getAll = void 0;
var tree_json_1 = __importDefault(require("../data/tree.json"));
var province_1 = require("./province");
var district_1 = require("./district");
var ward_1 = require("./ward");
var getAll = function () {
    return tree_json_1.default;
};
exports.getAll = getAll;
var getTreeByCode = function (pCode, dCode, cCode) {
    var province = (0, province_1.findProvinceByCode)(pCode)[0];
    if (!province) {
        return null;
    }
    var district = (0, district_1.findDistrictByCode)(dCode)[0];
    if (!district) {
        return null;
    }
    var ward = (0, ward_1.findWardByCode)(cCode)[0];
    if (!ward) {
        return null;
    }
    var result = __assign({}, province);
    result["quan_huyen"] = district;
    result["quan_huyen"]["xa_phuong"] = ward;
    return result;
};
exports.getTreeByCode = getTreeByCode;

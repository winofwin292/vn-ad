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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var index_1 = require("../index");
var SelectDistrict = function (_a) {
    var value = _a.value, handleChange = _a.onChange, province = _a.province, newProps = __rest(_a, ["value", "onChange", "province"]);
    var _b = (0, react_1.useState)([]), districts = _b[0], setDistricts = _b[1];
    (0, react_1.useEffect)(function () {
        var temp = [];
        if (!province)
            temp = (0, index_1.getAllDistrict)();
        else if (province === "-1") {
            temp = [];
        }
        else
            temp = (0, index_1.getListDistrictByParentCode)(province);
        handleChange("-1");
        setDistricts(temp);
    }, [handleChange, province]);
    return (react_1.default.createElement("select", __assign({ value: value, onChange: function (e) { return handleChange(e.target.value); } }, newProps),
        react_1.default.createElement("option", { value: "-1" }, "Ch\u1ECDn qu\u1EADn/huy\u1EC7n"),
        province === "-1" ? ("") : (react_1.default.createElement(react_1.default.Fragment, null, districts.map(function (item, index) { return (react_1.default.createElement("option", { key: index, value: item.code }, item.name_with_type)); })))));
};
SelectDistrict.propTypes = {
    value: prop_types_1.default.string.isRequired,
    onChange: prop_types_1.default.func.isRequired,
    province: prop_types_1.default.string,
};
exports.default = (0, react_1.memo)(SelectDistrict);

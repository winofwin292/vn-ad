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
var SelectWard = function (_a) {
    var value = _a.value, handleChange = _a.onChange, district = _a.district, newProps = __rest(_a, ["value", "onChange", "district"]);
    var _b = (0, react_1.useState)([]), wards = _b[0], setWards = _b[1];
    (0, react_1.useEffect)(function () {
        var temp = [];
        if (!district)
            temp = (0, index_1.getAllWard)();
        else if (district === "-1") {
            temp = [];
        }
        else
            temp = (0, index_1.getListWardByParentCode)(district);
        handleChange("-1");
        setWards(temp);
    }, [handleChange, district]);
    return (react_1.default.createElement("select", __assign({ value: value, onChange: function (e) { return handleChange(e.target.value); } }, newProps),
        react_1.default.createElement("option", { value: "-1" }, "Ch\u1ECDn x\u00E3/ph\u01B0\u1EDDng"),
        district === "-1" ? ("") : (react_1.default.createElement(react_1.default.Fragment, null, wards.map(function (item, index) { return (react_1.default.createElement("option", { key: index, value: item.code }, item.name_with_type)); })))));
};
SelectWard.propTypes = {
    value: prop_types_1.default.string.isRequired,
    onChange: prop_types_1.default.func.isRequired,
    district: prop_types_1.default.string,
};
exports.default = (0, react_1.memo)(SelectWard);

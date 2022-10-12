"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _index = require("../index");
const _excluded = ["value", "onChange", "district"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function SelectCommune(props) {
  const {
      value,
      onChange,
      district
    } = props,
    newProps = _objectWithoutProperties(props, _excluded);
  const [communes, setCommunes] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    let temp = [];
    if (!district) temp = (0, _index.getAllCommune)();else if (district === "-1") {
      temp = [];
    } else temp = (0, _index.getListCommuneByParentCode)(district);
    onChange("-1");
    setCommunes(temp);
  }, [onChange, district]);
  const handleChange = e => {
    onChange(e.target.value);
  };
  return /*#__PURE__*/_react.default.createElement("select", _extends({
    value: value,
    onChange: e => handleChange(e)
  }, newProps), /*#__PURE__*/_react.default.createElement("option", {
    value: "-1"
  }, "Ch\u1ECDn x\xE3/ph\u01B0\u1EDDng"), district === "-1" ? "" : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, communes.map((item, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: index,
    value: item.code
  }, item.name_with_type))));
}
SelectCommune.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  district: _propTypes.default.string
};
var _default = /*#__PURE__*/(0, _react.memo)(SelectCommune);
exports.default = _default;
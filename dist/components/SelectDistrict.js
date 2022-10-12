"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _index = require("../utils/index");
const _excluded = ["value", "onChange", "province"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function SelectDistrict(props) {
  const {
      value,
      onChange,
      province
    } = props,
    newProps = _objectWithoutProperties(props, _excluded);
  const [districts, setDistricts] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    let temp = [];
    if (!province) temp = (0, _index.getAllDistrict)();else if (province === "-1") {
      temp = [];
      onChange("-1");
    } else temp = (0, _index.getListDistrictByParentCode)(province);
    setDistricts(temp);
  }, [onChange, province]);
  const handleChange = e => {
    onChange(e.target.value);
  };
  return /*#__PURE__*/_react.default.createElement("select", _extends({
    value: value,
    onChange: e => handleChange(e)
  }, newProps), /*#__PURE__*/_react.default.createElement("option", {
    value: "-1"
  }, "Ch\u1ECDn qu\u1EADn/huy\u1EC7n"), province === "-1" ? "" : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, districts.map((item, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: index,
    value: item.code
  }, item.name_with_type))));
}
SelectDistrict.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  province: _propTypes.default.string
};
var _default = /*#__PURE__*/(0, _react.memo)(SelectDistrict);
exports.default = _default;
import SelectProvince from "./components/SelectProvince";
import SelectDistrict from "./components/SelectDistrict";
import SelectWard from "./components/SelectWard";
import { getTreeByCode } from "./utils/tree";
import {
    getAllProvince,
    findProvinceByCode,
    findProvinceByName,
    getProvinceName,
    getProvinceNameWithType,
} from "./utils/province";
import {
    getAllDistrict,
    findDistrictByCode,
    findDistrictByName,
    getDistrictName,
    getDistrictNameWithType,
    getListDistrictByParentCode,
    getDistrictPath,
    getDistrictPathWithType,
} from "./utils/district";
import {
    getAllWard,
    findWardByCode,
    findWardByName,
    getWardName,
    getWardNameWithType,
    getListWardByParentCode,
    getWardPath,
    getWardPathWithType,
} from "./utils/ward";

export {
    SelectProvince,
    SelectDistrict,
    SelectWard,
    getAllProvince,
    findProvinceByCode,
    findProvinceByName,
    getProvinceName,
    getProvinceNameWithType,
    getAllDistrict,
    findDistrictByCode,
    findDistrictByName,
    getDistrictName,
    getDistrictNameWithType,
    getListDistrictByParentCode,
    getDistrictPath,
    getDistrictPathWithType,
    getAllWard,
    findWardByCode,
    findWardByName,
    getWardName,
    getWardNameWithType,
    getListWardByParentCode,
    getWardPath,
    getWardPathWithType,
    getTreeByCode,
};

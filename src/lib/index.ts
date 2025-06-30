import SelectProvince from "./components/SelectProvince";
// import SelectDistrict from "./components/SelectDistrict";
import SelectWard from "./components/SelectWard";
import { getTreeByCode } from "./utils/tree";
import {
    getAllProvinces,
    findProvinceByCode,
    findProvinceByName,
    getProvinceName,
    getProvinceNameWithType,
} from "./utils/province";
import {
    getAllWards,
    findWardByCode,
    findWardByName,
    getWardName,
    getWardNameWithType,
    getListWardByProvinceCode,
    getWardPath,
    getWardPathWithType,
} from "./utils/ward";

export {
    SelectProvince,
    SelectWard,
    getAllProvinces,
    findProvinceByCode,
    findProvinceByName,
    getProvinceName,
    getProvinceNameWithType,

    getAllWards,
    findWardByCode,
    findWardByName,
    getWardName,
    getWardNameWithType,
    getListWardByProvinceCode,
    getWardPath,
    getWardPathWithType,

    getTreeByCode,
};

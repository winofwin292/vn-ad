import { getAll } from "./tree";
import {
    getAllProvince,
    getProvinceByCode,
    getProvinceName,
    getProvinceNameWithType,
} from "./province";
import {
    getAllDistrict,
    getDistrictByCode,
    getDistrictName,
    getDistrictNameWithType,
    getListDistrictByParentCode,
    getDistrictPath,
    getDistrictPathWithType,
} from "./district";
import {
    getAllCommune,
    getCommuneByCode,
    getCommuneName,
    getCommuneNameWithType,
    getListCommuneByParentCode,
    getCommunePath,
    getCommunePathWithType,
} from "./commune";

const getTreeByCode = (pCode, dCode, cCode) => {
    const province = getProvinceByCode(pCode)[0];
    if (!province) {
        return null;
    }

    const district = getDistrictByCode(dCode)[0];
    if (!district) {
        return null;
    }

    const commune = getCommuneByCode(cCode)[0];
    if (!commune) {
        return null;
    }

    let result = { ...province };
    result["quan-huyen"] = district;
    result["quan-huyen"]["xa-phuong"] = commune;

    return result;
};

export {
    getAll,
    getAllProvince,
    getProvinceByCode,
    getProvinceName,
    getProvinceNameWithType,
    getAllDistrict,
    getDistrictByCode,
    getDistrictName,
    getDistrictNameWithType,
    getListDistrictByParentCode,
    getDistrictPath,
    getDistrictPathWithType,
    getAllCommune,
    getCommuneByCode,
    getCommuneName,
    getCommuneNameWithType,
    getListCommuneByParentCode,
    getCommunePath,
    getCommunePathWithType,
    getTreeByCode,
};

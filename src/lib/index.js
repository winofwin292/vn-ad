import SelectProvince from "./components/SelectProvince";
import SelectDistrict from "./components/SelectDistrict";
import SelectCommune from "./components/SelectCommune";
import {
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
} from "./utils";

const vnad = {
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

export { SelectProvince, SelectDistrict, SelectCommune, vnad };

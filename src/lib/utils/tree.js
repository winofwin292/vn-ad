import tree from "../data/tree.json";
import { getProvinceByCode } from "./province";
import { getDistrictByCode } from "./district";
import { getCommuneByCode } from "./commune";

export const getAll = () => {
    return tree;
};

export const getTreeByCode = (pCode, dCode, cCode) => {
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

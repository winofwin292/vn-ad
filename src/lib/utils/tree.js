import tree from "../data/tree.json";
import { findProvinceByCode } from "./province";
import { findDistrictByCode } from "./district";
import { findCommuneByCode } from "./commune";

export const getAll = () => {
    return tree;
};

export const getTreeByCode = (pCode, dCode, cCode) => {
    const province = findProvinceByCode(pCode)[0];
    if (!province) {
        return null;
    }

    const district = findDistrictByCode(dCode)[0];
    if (!district) {
        return null;
    }

    const commune = findCommuneByCode(cCode)[0];
    if (!commune) {
        return null;
    }

    let result = { ...province };
    result["quan-huyen"] = district;
    result["quan-huyen"]["xa-phuong"] = commune;

    return result;
};

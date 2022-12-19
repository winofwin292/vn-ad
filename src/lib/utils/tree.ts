import tree from "../data/tree.json";
import { findProvinceByCode } from "./province";
import { findDistrictByCode } from "./district";
import { findWardByCode } from "./ward";

type Tree = {
    name: string;
    slug: string;
    type: string;
    name_with_type: string;
    code: string;
    quan_huyen?: {
        name: string;
        type: string;
        slug: string;
        name_with_type: string;
        path: string;
        path_with_type: string;
        code: string;
        parent_code: string;
        xa_phuong?: {
            name: string;
            type: string;
            slug: string;
            name_with_type: string;
            path: string;
            path_with_type: string;
            code: string;
            parent_code: string;
        };
    };
};

export const getAll: any = () => {
    return tree;
};

export const getTreeByCode = (pCode: string, dCode: string, cCode: string) => {
    const province = findProvinceByCode(pCode)[0];
    if (!province) {
        return null;
    }

    const district = findDistrictByCode(dCode)[0];
    if (!district) {
        return null;
    }

    const ward = findWardByCode(cCode)[0];
    if (!ward) {
        return null;
    }

    let result: Tree = { ...province };
    result["quan_huyen"] = district;
    result["quan_huyen"]["xa_phuong"] = ward;

    return result;
};

import wards from "../data/wards.json";

export const getAllWard = () => {
    return wards;
};

export const findWardByCode = (code: string) => {
    return wards.filter((item) => item.code === code);
};

export const findWardByName = (name: string) => {
    return wards.filter((item) => item.name === name);
};

export const getWardName = (code: string) => {
    const ward = wards.filter((item) => item.code === code);
    return !!ward.length ? ward[0].name : "";
};

export const getWardNameWithType = (code: string) => {
    const ward = wards.filter((item) => item.code === code);
    return !!ward.length ? ward[0].name_with_type : "";
};

export const getListWardByParentCode = (code: string) => {
    return wards.filter((item) => item.parent_code === code);
};

export const getWardPath = (code: string) => {
    const ward = wards.filter((item) => item.code === code);
    return !!ward.length ? ward[0].path : "";
};

export const getWardPathWithType = (code: string) => {
    const ward = wards.filter((item) => item.code === code);
    return !!ward.length ? ward[0].path_with_type : "";
};

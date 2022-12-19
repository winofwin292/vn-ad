import districts from "../data/districts.json";

export const getAllDistrict = () => {
    return districts;
};

export const findDistrictByCode = (code: string) => {
    return districts.filter((item) => item.code === code);
};

export const findDistrictByName = (name: string) => {
    return districts.filter((item) => item.name === name);
};

export const getDistrictName = (code: string) => {
    const district = districts.filter((item) => item.code === code);
    return !!district.length ? district[0].name : "";
};

export const getDistrictNameWithType = (code: string) => {
    const district = districts.filter((item) => item.code === code);
    return !!district.length ? district[0].name_with_type : "";
};

export const getListDistrictByParentCode = (code: string) => {
    return districts.filter((item) => item.parent_code === code);
};

export const getDistrictPath = (code: string) => {
    const district = districts.filter((item) => item.code === code);
    return !!district.length ? district[0].path : "";
};

export const getDistrictPathWithType = (code: string) => {
    const district = districts.filter((item) => item.code === code);
    return !!district.length ? district[0].path_with_type : "";
};

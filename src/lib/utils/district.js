import districts from "../data/districts.json";

export const getAllDistrict = () => {
    return districts;
};

export const findDistrictByCode = (code) => {
    return districts.filter((item) => item.code === code);
};

export const findDistrictByName = (name) => {
    return districts.filter((item) => item.name === name);
};

export const getDistrictName = (code) => {
    const district = districts.filter((item) => item.code === code);
    return !!district.length ? district[0].name : "";
};

export const getDistrictNameWithType = (code) => {
    const district = districts.filter((item) => item.code === code);
    return !!district.length ? district[0].name_with_type : "";
};

export const getListDistrictByParentCode = (code) => {
    return districts.filter((item) => item.parent_code === code);
};

export const getDistrictPath = (code) => {
    const district = districts.filter((item) => item.code === code);
    return !!district.length ? district[0].path : "";
};

export const getDistrictPathWithType = (code) => {
    const district = districts.filter((item) => item.code === code);
    return !!district.length ? district[0].path_with_type : "";
};

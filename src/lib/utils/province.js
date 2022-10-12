import provinces from "../data/provinces.json";

export const getAllProvince = () => {
    return provinces;
};

export const findProvinceByCode = (code) => {
    return provinces.filter((item) => item.code === code);
};

export const findProvinceByName = (name) => {
    return provinces.filter((item) => item.name === name);
};

export const getProvinceName = (code) => {
    const province = provinces.filter((item) => item.code === code);
    return !!province.length ? province[0].name : "";
};

export const getProvinceNameWithType = (code) => {
    const province = provinces.filter((item) => item.code === code);
    return !!province.length ? province[0].name_with_type : "";
};

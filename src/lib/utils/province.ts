import provinces from "../data/provinces.json";

export const getAllProvince = () => {
    return provinces;
};

export const findProvinceByCode = (code: string) => {
    return provinces.filter((item) => item.code === code);
};

export const findProvinceByName = (name: string) => {
    return provinces.filter((item) => item.name === name);
};

export const getProvinceName = (code: string) => {
    const province = provinces.filter((item) => item.code === code);
    return !!province.length ? province[0].name : "";
};

export const getProvinceNameWithType = (code: string) => {
    const province = provinces.filter((item) => item.code === code);
    return !!province.length ? province[0].name_with_type : "";
};

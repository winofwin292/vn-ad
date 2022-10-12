import communes from "../data/communes.json";

export const getAllCommune = () => {
    return communes;
};

export const findCommuneByCode = (code) => {
    return communes.filter((item) => item.code === code);
};

export const findCommuneByName = (name) => {
    return communes.filter((item) => item.name === name);
};

export const getCommuneName = (code) => {
    const commune = communes.filter((item) => item.code === code);
    return !!commune.length ? commune[0].name : "";
};

export const getCommuneNameWithType = (code) => {
    const commune = communes.filter((item) => item.code === code);
    return !!commune.length ? commune[0].name_with_type : "";
};

export const getListCommuneByParentCode = (code) => {
    return communes.filter((item) => item.parent_code === code);
};

export const getCommunePath = (code) => {
    const commune = communes.filter((item) => item.code === code);
    return !!commune.length ? commune[0].path : "";
};

export const getCommunePathWithType = (code) => {
    const commune = communes.filter((item) => item.code === code);
    return !!commune.length ? commune[0].path_with_type : "";
};

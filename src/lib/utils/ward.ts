import wards from "../data/wards.json";
import { Ward } from "../types/Ward";

/**
 * @description Get all wards
 * @returns {Ward[]}
 */
function getAllWards(): Ward[] {
    return wards;
}

/**
 * @description Find ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {Ward[]}
 */
function findWardByCode(ward_code: string): Ward[] {
    return wards.filter((item: Ward) => item.ward_code === ward_code);
}

/**
 * @description Find ward by name
 * @param {string} name - The name of the ward
 * @returns {Ward[]}
 */
function findWardByName(name: string): Ward[] {
    return wards.filter((item: Ward) => item.name === name);
}

/**
 * @description Get the name of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
function getWardName(ward_code: string): string {
    const ward: Ward | undefined = wards.find((item: Ward) => item.ward_code === ward_code);
    return ward ? ward.name : '';
}

/**
 * @description Get the name with type of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
function getWardNameWithType(ward_code: string): string {
    const ward: Ward | undefined = wards.find((item: Ward) => item.ward_code === ward_code);
    return ward ? ward.name_with_type : '';
}

/**
 * @description Get list of wards by province_code
 * @param {string} code - The province code of the wards
 * @returns {Ward[]}
 */
function getListWardByProvinceCode(province_code: string): Ward[] {
    return wards.filter((item: Ward) => item.province_code === province_code);
}

/**
 * @description Get the path of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
function getWardPath(ward_code: string): string {
    const ward: Ward | undefined = wards.find((item: Ward) => item.ward_code === ward_code);
    return ward ? ward.path : '';
}

/**
 * @description Get the path with type of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
function getWardPathWithType(ward_code: string): string {
    const ward: Ward | undefined = wards.find((item: Ward) => item.ward_code === ward_code);
    return ward ? ward.path_with_type : '';
}

export { getAllWards, findWardByCode, findWardByName, getWardName, getWardNameWithType, getListWardByProvinceCode, getWardPath, getWardPathWithType };

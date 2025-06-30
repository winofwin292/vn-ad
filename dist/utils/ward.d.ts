import { Ward } from "../types/Ward";
/**
 * @description Get all wards
 * @returns {Ward[]}
 */
declare function getAllWards(): Ward[];
/**
 * @description Find ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {Ward[]}
 */
declare function findWardByCode(ward_code: string): Ward[];
/**
 * @description Find ward by name
 * @param {string} name - The name of the ward
 * @returns {Ward[]}
 */
declare function findWardByName(name: string): Ward[];
/**
 * @description Get the name of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
declare function getWardName(ward_code: string): string;
/**
 * @description Get the name with type of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
declare function getWardNameWithType(ward_code: string): string;
/**
 * @description Get list of wards by province_code
 * @param {string} code - The province code of the wards
 * @returns {Ward[]}
 */
declare function getListWardByProvinceCode(province_code: string): Ward[];
/**
 * @description Get the path of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
declare function getWardPath(ward_code: string): string;
/**
 * @description Get the path with type of the ward by ward_code
 * @param {string} ward_code - The code of the ward
 * @returns {string}
 */
declare function getWardPathWithType(ward_code: string): string;
export { getAllWards, findWardByCode, findWardByName, getWardName, getWardNameWithType, getListWardByProvinceCode, getWardPath, getWardPathWithType };

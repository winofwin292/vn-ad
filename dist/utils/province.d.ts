import { Province } from '../types/Province';
/**
 * @description Get all provinces
 * @returns {Province[]}
 */
declare function getAllProvinces(): Province[];
/**
 * @description Find province by province_code
 * @param {string} province_code - The code of the province
 * @returns {Province[]}
 */
declare function findProvinceByCode(province_code: string): Province[];
/**
 * @description Find province by name
 * @param {string} name - The name of the province
 * @returns {Province[]}
 */
declare function findProvinceByName(name: string): Province[];
/**
 * @description Get the name of the province by province_code
 * @param {string} province_code - The code of the province
 * @returns {string}
 */
declare function getProvinceName(province_code: string): string;
/**
 * @description Get the name with type of the province by province_code
 * @param {string} province_code - The code of the province
 * @returns {string}
 */
declare function getProvinceNameWithType(province_code: string): string;
export { getAllProvinces, findProvinceByCode, findProvinceByName, getProvinceName, getProvinceNameWithType, };

import provinces from '../data/provinces.json';
import { Province } from '../types/Province';

/**
 * @description Get all provinces
 * @returns {Province[]}
 */
function getAllProvinces(): Province[] {
	return provinces;
}

/**
 * @description Find province by province_code
 * @param {string} province_code - The code of the province
 * @returns {Province[]}
 */
function findProvinceByCode(province_code: string): Province[] {
	return provinces.filter(
		(item: Province) => item.province_code === province_code,
	);
}

/**
 * @description Find province by name
 * @param {string} name - The name of the province
 * @returns {Province[]}
 */
function findProvinceByName(name: string): Province[] {
	return provinces.filter((item: Province) => item.name === name);
}

/**
 * @description Get the name of the province by province_code
 * @param {string} province_code - The code of the province
 * @returns {string}
 */
function getProvinceName(province_code: string): string {
	const province: Province | undefined = provinces.find(
		(item: Province) => item.province_code === province_code,
	);
	return province ? province.name : '';
}

/**
 * @description Get the name with type of the province by province_code
 * @param {string} province_code - The code of the province
 * @returns {string}
 */
function getProvinceNameWithType(province_code: string): string {
	const province: Province | undefined = provinces.find(
		(item: Province) => item.province_code === province_code,
	);
	return province ? province.name_with_type : '';
}

export {
	getAllProvinces,
	findProvinceByCode,
	findProvinceByName,
	getProvinceName,
	getProvinceNameWithType,
};

import { findProvinceByCode } from './province';
import { findWardByCode } from './ward';

type Tree = {
	province_code: string;
	name: string;
	short_name: string;
	code: string;
	place_type: string;
	slug: string;
	slug_type: string;
	name_with_type: string;
	ward_count: number;
	ward?: {
		ward_code: string;
		name: string;
		place_type: string;
		slug: string;
		slug_type: string;
		name_with_type: string;
		path: string;
		path_with_type: string;
		province_code: string;
	};
};

export const getTreeByCode = (province_code: string, ward_code: string) => {
	const province = findProvinceByCode(province_code)[0];
	if (!province) {
		return null;
	}

	const ward = findWardByCode(ward_code)[0];
	if (!ward) {
		return null;
	}

	let result: Tree = { ...province };
	result['ward'] = ward;

	return result;
};

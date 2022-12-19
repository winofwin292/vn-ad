export declare const getAllDistrict: () => {
    name: string;
    type: string;
    slug: string;
    name_with_type: string;
    path: string;
    path_with_type: string;
    code: string;
    parent_code: string;
}[];
export declare const findDistrictByCode: (code: string) => {
    name: string;
    type: string;
    slug: string;
    name_with_type: string;
    path: string;
    path_with_type: string;
    code: string;
    parent_code: string;
}[];
export declare const findDistrictByName: (name: string) => {
    name: string;
    type: string;
    slug: string;
    name_with_type: string;
    path: string;
    path_with_type: string;
    code: string;
    parent_code: string;
}[];
export declare const getDistrictName: (code: string) => string;
export declare const getDistrictNameWithType: (code: string) => string;
export declare const getListDistrictByParentCode: (code: string) => {
    name: string;
    type: string;
    slug: string;
    name_with_type: string;
    path: string;
    path_with_type: string;
    code: string;
    parent_code: string;
}[];
export declare const getDistrictPath: (code: string) => string;
export declare const getDistrictPathWithType: (code: string) => string;

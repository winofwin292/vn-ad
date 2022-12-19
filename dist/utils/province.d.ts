export declare const getAllProvince: () => {
    name: string;
    slug: string;
    type: string;
    name_with_type: string;
    code: string;
}[];
export declare const findProvinceByCode: (code: string) => {
    name: string;
    slug: string;
    type: string;
    name_with_type: string;
    code: string;
}[];
export declare const findProvinceByName: (name: string) => {
    name: string;
    slug: string;
    type: string;
    name_with_type: string;
    code: string;
}[];
export declare const getProvinceName: (code: string) => string;
export declare const getProvinceNameWithType: (code: string) => string;

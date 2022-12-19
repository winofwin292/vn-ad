export declare const getAllWard: () => {
    name: string;
    type: string;
    slug: string;
    name_with_type: string;
    path: string;
    path_with_type: string;
    code: string;
    parent_code: string;
}[];
export declare const findWardByCode: (code: string) => {
    name: string;
    type: string;
    slug: string;
    name_with_type: string;
    path: string;
    path_with_type: string;
    code: string;
    parent_code: string;
}[];
export declare const findWardByName: (name: string) => {
    name: string;
    type: string;
    slug: string;
    name_with_type: string;
    path: string;
    path_with_type: string;
    code: string;
    parent_code: string;
}[];
export declare const getWardName: (code: string) => string;
export declare const getWardNameWithType: (code: string) => string;
export declare const getListWardByParentCode: (code: string) => {
    name: string;
    type: string;
    slug: string;
    name_with_type: string;
    path: string;
    path_with_type: string;
    code: string;
    parent_code: string;
}[];
export declare const getWardPath: (code: string) => string;
export declare const getWardPathWithType: (code: string) => string;

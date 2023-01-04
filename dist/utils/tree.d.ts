type Tree = {
    name: string;
    slug: string;
    type: string;
    name_with_type: string;
    code: string;
    quan_huyen?: {
        name: string;
        type: string;
        slug: string;
        name_with_type: string;
        path: string;
        path_with_type: string;
        code: string;
        parent_code: string;
        xa_phuong?: {
            name: string;
            type: string;
            slug: string;
            name_with_type: string;
            path: string;
            path_with_type: string;
            code: string;
            parent_code: string;
        };
    };
};
export declare const getTreeByCode: (pCode: string, dCode: string, cCode: string) => Tree | null;
export {};

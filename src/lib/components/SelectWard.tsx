import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getListWardByParentCode, getAllWard } from "../index";

type WardProps = {
    value: string;
    onChange: (id: string) => void;
    district?: string;
    [x: string]: any;
};

type Ward = {
    name: string;
    type: string;
    slug: string;
    name_with_type: string;
    path: string;
    path_with_type: string;
    code: string;
    parent_code: string;
};

const SelectWard: React.FC<WardProps> = ({
    value,
    onChange: handleChange,
    district,
    ...newProps
}) => {
    const [wards, setWards] = useState<Ward[]>([]);

    useEffect(() => {
        let temp: Ward[] = [];

        if (!district) temp = getAllWard();
        else if (district === "-1") {
            temp = [];
        } else temp = getListWardByParentCode(district);

        handleChange("-1");
        setWards(temp);
    }, [handleChange, district]);

    return (
        <select
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            {...newProps}
        >
            <option value="-1">Chọn xã/phường</option>
            {district === "-1" ? (
                ""
            ) : (
                <>
                    {wards.map((item, index) => (
                        <option key={index} value={item.code}>
                            {item.name_with_type}
                        </option>
                    ))}
                </>
            )}
        </select>
    );
};

SelectWard.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    district: PropTypes.string,
};

export default memo(SelectWard);

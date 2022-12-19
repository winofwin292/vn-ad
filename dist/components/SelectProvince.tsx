import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAllProvince } from "../index";

type ProvinceProps = {
    value: string;
    onChange: (id: string) => void;
    [x: string]: any;
};

type Province = {
    name: string;
    slug: string;
    type: string;
    name_with_type: string;
    code: string;
};

const SelectProvince: React.FC<ProvinceProps> = ({
    value,
    onChange: handleChange,
    ...newProps
}) => {
    const [provinces, setProvinces] = useState<Province[]>([]);

    useEffect(() => {
        setProvinces(getAllProvince());
    }, []);

    return (
        <select
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            {...newProps}
        >
            <option value="-1">Chọn tỉnh/thành phố</option>
            {provinces.map((item, index) => (
                <option key={index} value={item.code}>
                    {item.name_with_type}
                </option>
            ))}
        </select>
    );
};

SelectProvince.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default memo(SelectProvince);

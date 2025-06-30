import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAllProvinces } from "../index";
import { Province } from "../types/Province";

type ProvinceProps = {
    value: string;
    onChange: (id: string) => void;
    [x: string]: any;
};

const SelectProvince: React.FC<ProvinceProps> = ({
    value,
    onChange: handleChange,
    ...newProps
}) => {
    const [provinces, setProvinces] = useState<Province[]>([]);

    useEffect(() => {
        setProvinces(getAllProvinces());
    }, []);

    return (
        <select
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            {...newProps}
        >
            <option value="-1">Chọn tỉnh/thành phố</option>
            {provinces.map((item, index) => (
                <option key={index} value={item.province_code}>
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

import React, { memo } from "react";
import PropTypes from "prop-types";
import { getAllProvince } from "../index";

function SelectProvince(props) {
    const { value, onChange, ...newProps } = props;
    const provinces = getAllProvince();

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <select value={value} onChange={(e) => handleChange(e)} {...newProps}>
            <option value="-1">Chọn tỉnh/thành phố</option>
            {provinces.map((item, index) => (
                <option key={index} value={item.code}>
                    {item.name_with_type}
                </option>
            ))}
        </select>
    );
}

SelectProvince.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default memo(SelectProvince);

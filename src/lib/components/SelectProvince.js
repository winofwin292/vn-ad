import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAllProvince } from "../index";

function SelectProvince(props) {
    const { value, onChange: handleChange, ...newProps } = props;
    const [provinces, setProvinces] = useState([]);

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
}

SelectProvince.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default memo(SelectProvince);

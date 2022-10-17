import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getListDistrictByParentCode, getAllDistrict } from "../index";

function SelectDistrict(props) {
    const { value, onChange: handleChange, province, ...newProps } = props;
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        let temp = [];

        if (!province) temp = getAllDistrict();
        else if (province === "-1") {
            temp = [];
        } else temp = getListDistrictByParentCode(province);
        handleChange("-1");

        setDistricts(temp);
    }, [handleChange, province]);

    return (
        <select
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            {...newProps}
        >
            <option value="-1">Chọn quận/huyện</option>
            {province === "-1" ? (
                ""
            ) : (
                <>
                    {districts.map((item, index) => (
                        <option key={index} value={item.code}>
                            {item.name_with_type}
                        </option>
                    ))}
                </>
            )}
        </select>
    );
}

SelectDistrict.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    province: PropTypes.string,
};

export default memo(SelectDistrict);

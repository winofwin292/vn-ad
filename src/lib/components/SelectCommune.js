import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getListCommuneByParentCode, getAllCommune } from "../utils/index";

function SelectCommune(props) {
    const { value, onChange, district, ...newProps } = props;
    const [communes, setCommunes] = useState([]);

    useEffect(() => {
        let temp = [];

        if (!district) temp = getAllCommune();
        else if (district === "-1") {
            temp = [];
        } else temp = getListCommuneByParentCode(district);

        onChange("-1");

        setCommunes(temp);
    }, [onChange, district]);

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <select value={value} onChange={(e) => handleChange(e)} {...newProps}>
            <option value="-1">Chọn xã/phường</option>
            {district === "-1" ? (
                ""
            ) : (
                <>
                    {communes.map((item, index) => (
                        <option key={index} value={item.code}>
                            {item.name_with_type}
                        </option>
                    ))}
                </>
            )}
        </select>
    );
}

SelectCommune.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    district: PropTypes.string,
};

export default memo(SelectCommune);

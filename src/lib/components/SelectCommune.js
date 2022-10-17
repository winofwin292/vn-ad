import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getListCommuneByParentCode, getAllCommune } from "../index";

function SelectCommune(props) {
    const { value, onChange: handleChange, district, ...newProps } = props;
    const [communes, setCommunes] = useState([]);

    useEffect(() => {
        let temp = [];

        if (!district) temp = getAllCommune();
        else if (district === "-1") {
            temp = [];
        } else temp = getListCommuneByParentCode(district);

        handleChange("-1");
        setCommunes(temp);
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

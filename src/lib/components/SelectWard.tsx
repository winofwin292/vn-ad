import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getListWardByProvinceCode, getAllWards } from "../index";
import { Ward } from "../types/Ward";

type WardProps = {
    value: string;
    onChange: (id: string) => void;
    province?: string;
    showAllNull?: boolean;
    [x: string]: any;
};

const SelectWard: React.FC<WardProps> = ({
    value,
    onChange: handleChange,
    province,
    showAllNull = false,
    ...newProps
}) => {
    const [wards, setWards] = useState<Ward[]>([]);

    useEffect(() => {
        let temp: Ward[] = [];

        if (!province){
            if (showAllNull) {
                temp = getAllWards();
            } else {
                temp = [];
            }
        }
        else if (province === "-1") {
            temp = [];
        } else temp = getListWardByProvinceCode(province);

        handleChange("-1");
        setWards(temp);
    }, [handleChange, province, showAllNull]);

    return (
        <select
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            {...newProps}
        >
            <option value="-1">Chọn phường/xã/đặc khu</option>
            {province === "-1" ? (
                ""
            ) : (
                <>
                    {wards.map((item, index) => (
                        <option key={index} value={item.ward_code}>
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

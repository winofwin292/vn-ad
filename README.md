# Vietnam Administrative Divisions - Đơn vị thành chính Việt Nam

This module includes functions, various customizable react components for .

-   Dữ liệu được lấy từ https://github.com/madnh/hanhchinhvn (có chỉnh sửa)
-   Dữ liệu đơn vị hành chính được cập nhật đến ngày 5/5/2022

# Install

=======

# NPM

npm install vn-ad

# Usage

```js
import React, { useState } from "react";
import { SelectProvince, SelectDistrict, SelectCommune } from "vn-ad";

export default Example(){
    const [tinh, setTinh] = useState("-1");
    const [huyen, setHuyen] = useState("-1");
    const [xa, setXa] = useState("-1");
    const [result, setResult] = useState("");

    const handleShow = () => {
        setResult(getCommunePathWithType(xa));
    };

    return (
        <div className="m-2">
                <SelectProvince
                    value={tinh}
                    onChange={setTinh}
                />
                <SelectDistrict
                    value={huyen}
                    province={tinh}
                    onChange={setHuyen}
                />
                <SelectCommune
                    value={xa}
                    district={huyen}
                    onChange={setXa}
                />
            <button
                onClick={handleShow}
            >
                Show
            </button>
            <p>Kết quả: {result}</p>
        </div>
    );
}
```

# Components

=======

## SelectProvince

## SelectDistrict

## SelectCommune

# Functions

=======

## getAll()

## getAllProvince()

## findProvinceByCode()

## findProvinceByName()

## getProvinceName()

## getProvinceNameWithType()

## getAllDistrict()

## findDistrictByCode()

## findDistrictByName()

## getDistrictName()

## getDistrictNameWithType()

## getListDistrictByParentCode()

## getDistrictPath()

## getDistrictPathWithType()

## getAllCommune()

## findCommuneByCode()

## findCommuneByName()

## getCommuneName()

## getCommuneNameWithType()

## getListCommuneByParentCode()

## getCommunePath()

## getCommunePathWithType()

## getTreeByCode()

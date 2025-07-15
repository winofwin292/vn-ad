# Vietnam Administrative Divisions - Đơn vị thành chính Việt Nam

[![Version](https://img.shields.io/npm/v/vn-ad.svg?color=green)](https://www.npmjs.com/package/vn-ad)

Cung cấp các thành phần và các hàm hỗ trợ tích hợp đơn vị hành chính vào dự án ReactJS.
- Version >= 1.0.0
    - Dữ liệu được lấy từ https://github.com/thanhtrungit97/dvhcvn
    - Dữ liệu được cập nhật theo Nghị quyết số 202/2025/QH15 của Quốc hội

## Cài đặt

```
$ npm install vn-ad
```

## Demo

Demo sử dụng vn-ad và Bootstrap 5

![This is an image](./demo.gif)

[Source code demo](https://github.com/bqthangdev/demo-vn-ad)

## Sử dụng

```js
import React, { useState } from "react";
import {
    SelectProvince,
    SelectWard,
    getWardPathWithType,
} from "vn-ad";

export default function Example() {
    //Biến lưu trữ mã đơn vị hành chính
    const [tinh, setTinh] = useState("");
    const [xa, setXa] = useState("");
    //Biến lưu trữ kết quả
    const [result, setResult] = useState("");

    const handleShow = () => {
        setResult(getWardPathWithType(xa));
    };

    return (
        <>
            <SelectProvince value={tinh} onChange={setTinh} />
            <SelectWard value={xa} province={tinh} onChange={setXa} showAllNull={false} />
            <button onClick={handleShow}>Show</button>
            <p>Kết quả: {result}</p>
        </>
    );
}
```

## Thành phần

### `<SelectProvince />`

Thuộc tính:

-   **value** (bắt buộc): giá trị nhận vào kiểu **_string_**. Dùng để lưu trữ mã tỉnh/thành phố khi chọn tỉnh/thành phố.
-   **onChange** (bắt buộc): giá trị nhận vào kiểu **_func_**. Dùng để đặt giá trị mới cho **_value_** khi chọn tỉnh/thành phố.

### `<SelectWard />`

Thuộc tính:

-   **value** (bắt buộc): giá trị nhận vào kiểu **_string_**. Dùng để lưu trữ mã phường/xã/đặc khu khi chọn phường/xã/đặc khu.
-   **onChange** (bắt buộc): giá trị nhận vào kiểu **_func_**. Dùng để đặt giá trị mới cho **_value_** khi chọn phường/xã/đặc khu.
-   **province**: giá trị nhận vào kiểu **_string_**. Mã tỉnh dùng để lọc danh sách phường/xã/đặc khu được chọn theo tỉnh.
-   **showAllNull**: mặc định **false**. Nếu bằng **true** sẽ cho phép chọn tất cả các phường/xã/đặc khu ở Việt Nam khi **value** rỗng.

## Hàm

### `getAllProvinces()`

Trả về dữ liệu chứa tất cả các tỉnh/thành phố hiện tại của Việt Nam.

Dữ liệu trả về:

```json
[
    {
        "province_code": "01",
        "name": "Thành phố Hà Nội",
        "short_name": "Thành phố Hà Nội",
        "code": "HNI",
        "place_type": "Thành phố Trung Ương",
        "slug": "thanh-pho-ha-noi",
        "slug_type": "thanh-pho-trung-uong",
        "name_with_type": "Thành phố Hà Nội",
        "ward_count": 126
    }
]
```

### `findProvinceByCode(province_code)`

Trả về dữ liệu chứa tỉnh/thành phố có mã giống với mã được truyền vào. Nếu không tìm thấy sẽ trả về danh sách rỗng **[]**.

Dữ liệu trả về:

```json
[
    {
        "province_code": "01",
        "name": "Thành phố Hà Nội",
        "short_name": "Thành phố Hà Nội",
        "code": "HNI",
        "place_type": "Thành phố Trung Ương",
        "slug": "thanh-pho-ha-noi",
        "slug_type": "thanh-pho-trung-uong",
        "name_with_type": "Thành phố Hà Nội",
        "ward_count": 126
    }
]
```

### `findProvinceByName(name)`

Trả về dữ liệu chứa tỉnh/thành phố có tên giống với tên được truyền vào. Nếu không tìm thấy sẽ trả về danh sách rỗng **[]**.

Dữ liệu trả về:

```json
[
    {
        "province_code": "01",
        "name": "Thành phố Hà Nội",
        "short_name": "Thành phố Hà Nội",
        "code": "HNI",
        "place_type": "Thành phố Trung Ương",
        "slug": "thanh-pho-ha-noi",
        "slug_type": "thanh-pho-trung-uong",
        "name_with_type": "Thành phố Hà Nội",
        "ward_count": 126
    }
]
```

### `getProvinceName(province_code)`

Trả về tên của tỉnh/thành phố có mã giống với mã được truyền vào. Nếu không tìm thấy sẽ trả về chuỗi rỗng **""**.

Dữ liệu trả về:

```
"Cao Bằng"
```

### `getProvinceNameWithType(province_code)`

Trả về tên đầy đủ của tỉnh/thành phố có mã giống với mã được truyền vào. Nếu không tìm thấy sẽ trả về chuỗi rỗng **""**.

Dữ liệu trả về:

```
"Tỉnh Cao Bằng"
```

### `getAllWards()`

Trả về dữ liệu chứa tất cả các phường/xã/đặc khu hiện tại của Việt Nam.

Dữ liệu trả về:

```json
[
    {
        "ward_code": "00070",
        "name": "Hoàn Kiếm",
        "place_type": "Phường",
        "slug": "hoan-kiem",
        "slug_type": "phuong",
        "name_with_type": "Phường Hoàn Kiếm",
        "path": "Hoàn Kiếm, Thành phố Hà Nội",
        "path_with_type": "Phường Hoàn Kiếm, Thành phố Hà Nội",
        "province_code": "01"
    }
]
```

### `findWardByCode(ward_code)`

Trả về dữ liệu chứa phường/xã/đặc khu có mã giống với mã được truyền vào. Nếu không tìm thấy sẽ trả về danh sách rỗng **[]**.

Dữ liệu trả về:

```json
[
    {
        "ward_code": "00070",
        "name": "Hoàn Kiếm",
        "place_type": "Phường",
        "slug": "hoan-kiem",
        "slug_type": "phuong",
        "name_with_type": "Phường Hoàn Kiếm",
        "path": "Hoàn Kiếm, Thành phố Hà Nội",
        "path_with_type": "Phường Hoàn Kiếm, Thành phố Hà Nội",
        "province_code": "01"
    }
]
```

### `findWardByName(name)`

Trả về dữ liệu chứa phường/xã/đặc khu có tên giống với tên được truyền vào. Nếu không tìm thấy sẽ trả về danh sách rỗng **[]**.

Dữ liệu trả về:

```json
[
    {
        "ward_code": "00070",
        "name": "Hoàn Kiếm",
        "place_type": "Phường",
        "slug": "hoan-kiem",
        "slug_type": "phuong",
        "name_with_type": "Phường Hoàn Kiếm",
        "path": "Hoàn Kiếm, Thành phố Hà Nội",
        "path_with_type": "Phường Hoàn Kiếm, Thành phố Hà Nội",
        "province_code": "01"
    }
]
```

### `getWardName(ward_code)`

Trả về tên của phường/xã/đặc khu có mã giống với mã được truyền vào. Nếu không tìm thấy sẽ trả về chuỗi rỗng **""**.

Dữ liệu trả về:

```
"Hoàn Kiếm"
```

### `getWardNameWithType(ward_code)`

Trả về tên đầy đủ của phường/xã/đặc khu có mã giống với mã được truyền vào. Nếu không tìm thấy sẽ trả về chuỗi rỗng **""**.

Dữ liệu trả về:

```
"Phường Hoàn Kiếm"
```

### `getListWardByProvinceCode(province_code)`

Trả về dữ liệu chứa phường/xã/đặc khu thuộc tỉnh có mã được truyền vào. Nếu không tìm thấy sẽ trả về danh sách rỗng **[]**.

Dữ liệu trả về:

```json
[
    {
        "ward_code": "00070",
        "name": "Hoàn Kiếm",
        "place_type": "Phường",
        "slug": "hoan-kiem",
        "slug_type": "phuong",
        "name_with_type": "Phường Hoàn Kiếm",
        "path": "Hoàn Kiếm, Thành phố Hà Nội",
        "path_with_type": "Phường Hoàn Kiếm, Thành phố Hà Nội",
        "province_code": "01"
    }
]
```

### `getWardPath(ward_code)`

Trả về địa chỉ của phường/xã/đặc khu có mã giống với mã được truyền vào. Nếu không tìm thấy sẽ trả về chuỗi rỗng **""**.

Dữ liệu trả về:

```
"Hoàn Kiếm, Thành phố Hà Nội"
```

### `getWardPathWithType(ward_code)`

Trả về địa chỉ đầy đủ của quận/huyện có mã giống với mã được truyền vào. Nếu không tìm thấy sẽ trả về chuỗi rỗng **""**.

Dữ liệu trả về:

```
"Phường Hoàn Kiếm, Thành phố Hà Nội"
```

### `getTreeByCode(province_code, ward_code)`

Trả về **object** chứa thông tin của mã tỉnh/thành phố, phường/xã/đặc khu được truyền vào. Nếu mã truyền vào không hợp lệ sẽ trả về **_null_**

Dữ liệu trả về:

```json
{
    "province_code": "01",
    "name": "Thành phố Hà Nội",
    "short_name": "Thành phố Hà Nội",
    "code": "HNI",
    "place_type": "Thành phố Trung Ương",
    "slug": "thanh-pho-ha-noi",
    "slug_type": "thanh-pho-trung-uong",
    "name_with_type": "Thành phố Hà Nội",
    "ward_count": 126,
    "ward": {
        "ward_code": "00070",
        "name": "Hoàn Kiếm",
        "place_type": "Phường",
        "slug": "hoan-kiem",
        "slug_type": "phuong",
        "name_with_type": "Phường Hoàn Kiếm",
        "path": "Hoàn Kiếm, Thành phố Hà Nội",
        "path_with_type": "Phường Hoàn Kiếm, Thành phố Hà Nội",
        "province_code": "01"
    }
}
```

## License

MIT License

Copyright (c) <2025> Banh Quoc Thang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

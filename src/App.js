import React, { useState } from "react";
import { SelectProvince, SelectDistrict, SelectCommune } from "./lib/index";
// import SelectDistrict from "./lib/components/SelectDistrict";
// import SelectCommune from "./lib/components/SelectCommune";

import { getCommunePathWithType } from "./lib/index";

function App() {
    const [tinh, setTinh] = useState("-1");
    const [huyen, setHuyen] = useState("-1");
    const [xa, setXa] = useState("-1");
    const [result, setResult] = useState("");

    const handleShow = () => {
        console.log(getCommunePathWithType(xa));
        setResult(getCommunePathWithType(xa));
    };

    return (
        <div className="m-2">
            <div className="d-grid gap-3">
                <SelectProvince
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "150px" }}
                    value={tinh}
                    onChange={setTinh}
                />
                <SelectDistrict
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "150px" }}
                    value={huyen}
                    province={tinh}
                    onChange={setHuyen}
                />
                <SelectCommune
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "150px" }}
                    value={xa}
                    district={huyen}
                    onChange={setXa}
                />
            </div>
            <button
                onClick={handleShow}
                type="button"
                className="btn btn-primary my-2"
            >
                Show
            </button>
            <p>Kết quả: {result}</p>
        </div>
    );
}

export default App;

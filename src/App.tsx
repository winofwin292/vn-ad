import React, { useState } from "react";
import { SelectProvince, SelectWard } from "./lib/index";

import { getWardPathWithType, getTreeByCode } from "./lib/index";

const App: React.FC = () => {
    const [tinh, setTinh] = useState<string>("");
    const [xa, setXa] = useState<string>("");

    const [result, setResult] = useState("");

    const handleShow = () => {
        console.log(getTreeByCode(tinh, xa));
        setResult(getWardPathWithType(xa));
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
                <SelectWard
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "150px" }}
                    value={xa}
                    province={tinh}
                    showAllNull={false}
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
};

export default App;

import React, { useEffect } from "react";

import Putyagang from "../../json/pg/putyagang.json";
import PutyagangImage from "../../json/pg/putyagangimage.json";

import Memories from "../memories.js";
import Icons from "../icons.js";
import Load from "../loading.js";

import "../../index.scss";
function PG() {
    return (
        <>
            <Load />
            <Memories img={PutyagangImage} />
            <div className="icon-container">
                {Putyagang.map((info, index) => (
                    <Icons data={Putyagang[index]} key={index} />
                ))}
            </div>
        </>
    );
}

export default PG;

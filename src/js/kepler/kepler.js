import React from "react";

// import kepler from "../../json/tb/kepler.json";
// import keplerImage from "../../json/tb/keplerimage.json";

// import Memories from "../memories.js";
// import Icons from "../icons.js";
import Countdown from "../../countdown";

import "../../index.scss";
function Kepler() {
    return (
        <>
            {/* <Memories img={keplerImage} />
            <div className="icon-container">
                {kepler.map((info, index) => (
                    <Icons data={kepler[index]} key={index} />
                ))}
            </div> */}

            <Countdown />
        </>
    );
}

export default Kepler;

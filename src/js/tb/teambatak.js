import React from "react";

// import Teambatak from "../../json/tb/teambatak.json";
// import TeambatakImage from "../../json/tb/teambatakimage.json";

// import Memories from "../memories.js";
// import Icons from "../icons.js";
import Countdown from "../../countdown";

import "../../index.scss";
function TB() {
    return (
        <>
            {/* <Memories img={TeambatakImage} />
            <div className="icon-container">
                {Teambatak.map((info, index) => (
                    <Icons data={Teambatak[index]} key={index} />
                ))}
            </div> */}

            <Countdown />
        </>
    );
}

export default TB;

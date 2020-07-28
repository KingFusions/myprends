import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../scss/nav.scss";

function Nav() {
    let [width, setWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
    });
    useEffect(() => {
        let burgers = document.querySelector(".burger");
        let lis1 = document.getElementById("li1");
        let lis2 = document.getElementById("li2");
        let lis3 = document.getElementById("li3");
        let lis4 = document.getElementById("li4");
        let lis5 = document.getElementById("li5");
        const line1 = document.getElementById("line1");
        const line2 = document.getElementById("line2");
        const line3 = document.getElementById("line3");
        const hide = document.getElementById("hide");
        if (width <= 755) {
            burgers.addEventListener("click", hides);
            lis1.addEventListener("click", hides);
            lis2.addEventListener("click", hides);
            lis3.addEventListener("click", hides);
            lis4.addEventListener("click", hides);
            lis5.addEventListener("click", hides);

            function hides() {
                line1.classList.toggle("line1change");
                line2.classList.toggle("line2change");
                line3.classList.toggle("line3change");
                hide.classList.toggle("hide");
            }
        }
    }, [width]);
    return (
        <>
            <div className="container">
                <nav>
                    <h3>PROJECT</h3>
                    <div className="burger">
                        <div className="line1" id="line1"></div>
                        <div className="line2" id="line2"></div>
                        <div className="line3" id="line3"></div>
                    </div>
                    <div id="hide" className="hide linksContainer">
                        <ul className="">
                            <span className="links">
                                <li>
                                    <Link id="li1" to={`/`}>
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link id="li2" to={`/memories`}>
                                        MEMORIES
                                    </Link>
                                </li>
                                <li>
                                    <Link id="li3" to={`/putyagang`}>
                                        PUTYA GANG
                                    </Link>
                                </li>
                                <li>
                                    <Link id="li4" to={"/teambatak"}>
                                        TEAM BATAK
                                    </Link>
                                </li>
                                <li>
                                    <Link id="li5" to={"/kepler"}>
                                        KEPLER
                                    </Link>
                                </li>
                            </span>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Nav;

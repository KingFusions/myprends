import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Memories(props) {
    let [top, setTop] = useState(window.innerHeight / 1.1);
    let [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        //Button

        window.addEventListener("scroll", scroll);
        function scroll() {
            let button = document.querySelector(`.buttonMemo`);
            let pos = button.getBoundingClientRect().top;
            setTop(window.innerHeight / 1.1);

            if (pos < top) {
                button.classList.add("toupbuttons");
            } else {
                button.classList.remove("toupbuttons");
            }
            //Pop
            window.addEventListener("resize", () =>
                setWidth(window.innerWidth)
            );

            let img2 = document.getElementById("img2");
            let img2Pos = img2.getBoundingClientRect().top;
            let text2 = document.getElementById("text2");

            let img3 = document.getElementById("img3");
            let img3Pos = img3.getBoundingClientRect().top;
            let text3 = document.getElementById("text3");

            let img4 = document.getElementById("img4");
            let img4Pos = img4.getBoundingClientRect().top;
            let text4 = document.getElementById("text4");

            if (width >= 661) {
                if (img2Pos < top) {
                    text2.classList.add("todowns");
                    img2.classList.add("torightimg");
                } else {
                    text2.classList.remove("todowns");
                    img2.classList.remove("torightimg");
                }
                if (img3Pos < top) {
                    text3.classList.add("torights");
                    img3.classList.add("toleftimg");
                } else {
                    text3.classList.remove("torights");
                    img3.classList.remove("toleftimg");
                }
            } else if (width >= 351 && width <= 660) {
                if (img3Pos < top) {
                    text3.classList.add("torights");
                    img3.classList.add("toleftimg");
                } else {
                    text3.classList.remove("torights");
                    img3.classList.remove("toleftimg");
                }
            }
            if (img4Pos < top) {
                text4.classList.add("tolefts");
                img4.classList.add("torightimg");
            } else {
                text4.classList.remove("tolefts");
                img4.classList.remove("torightimg");
            }
        }

        return () => window.removeEventListener("scroll", scroll);
    }, [width]);
    return (
        <>
            <div className="memories-container">
                <div className="imgs">
                    <div className="img1">
                        <span className="left-text toUpText">
                            {props.img[0].title}
                            <br />
                            <label className="date">{props.img[0].date}</label>
                            <p className="sentence">
                                {props.img[0].description}
                            </p>
                        </span>
                        <img
                            src={props.img[0].img}
                            className="toLeftimg1 right"
                            id="img1"
                            alt=""
                        />
                    </div>
                    <div className="img2">
                        <img
                            src={props.img[1].img}
                            className="toRightimg1"
                            id="img2"
                            alt=""
                        />
                        <span
                            id="text2"
                            className="right-text toDownText right"
                        >
                            {props.img[1].title}
                            <br />
                            <label className="date">{props.img[1].date}</label>
                            <p className="sentence">
                                {props.img[1].description}
                            </p>
                        </span>
                    </div>
                    <div className="img3">
                        <span id="text3" className="left-text toRightText">
                            {props.img[2].title}
                            <br />
                            <label className="date">{props.img[2].date}</label>
                            <p className="sentence">
                                {props.img[2].description}
                            </p>
                        </span>
                        <img
                            src={props.img[2].img}
                            className="toLeftimg2 right"
                            id="img3"
                            alt=""
                        />
                    </div>
                    <div className="img4">
                        <img
                            src={props.img[3].img}
                            className="toRightimg2"
                            id="img4"
                            alt=""
                        />
                        <span
                            id="text4"
                            className="right-text toLeftText right"
                        >
                            {props.img[3].title}
                            <br />
                            <label className="date">{props.img[3].date}</label>
                            <p className="sentence">
                                {props.img[3].description}
                            </p>
                        </span>
                    </div>
                    <div className="more">
                        <Link to="/memories">
                            <button className="buttonMemo">MORE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Memories;

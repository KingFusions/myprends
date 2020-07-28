import React, { useEffect, useRef, useState } from "react";

function Load() {
    let loaderid, upid, downid;
    loaderid = useRef();
    upid = useRef();
    downid = useRef();
    function hide() {
        upid.current.style.transform = "translateY(-110%)";
        downid.current.style.transform = "translateY(100%)";
        loaderid.current.style.opacity = "0";
    }

    if (!window.location.hash) {
        window.location = window.location + "#";
        window.location.reload();
    }
    window.addEventListener("load", () => {
        hide();
    });
    let loadStyle = {
        pointerEvents: "none",
        zIndex: "100",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        transition: "opacity 2s ease-out",
    };
    let up = {
        width: "100%",
        height: "53%",
        backgroundColor: "#222222",
        transition: "all 1.5s ease-out",
    };
    let down = {
        width: "100%",
        height: "53%",
        backgroundColor: "#222222",
        transition: "all 1.5s ease-out",
    };
    let cube = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        zIndex: "10",
        transition: "all 1.5s ease-out",
    };
    let cubes = useRef();
    function rotate() {
        setInterval(() => {
            cubes.current.style.color = "pink";
        }, 400);
    }

    return (
        <div style={loadStyle} ref={loaderid}>
            <div style={up} ref={upid}></div>
            <div style={down} ref={downid}></div>
        </div>
    );
}

export default Load;

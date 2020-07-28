import React, { useState, useRef, useEffect } from "react";
import "./loading.scss";
function Countdown() {
    let [day, setDay] = useState("00");
    let [hour, setHour] = useState("00");
    let [minute, setMinute] = useState("00");
    let [second, setSecond] = useState("00");

    let interval = useRef();
    let start = true;
    let timer = () => {
        let releaseDate = new Date("August 5, 2020 20:00:00").getTime();
        interval = setInterval(() => {
            let now = new Date().getTime();
            let distance = releaseDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                ((distance % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) /
                    (1000 * 60)
            );

            let seconds = Math.floor(
                (((distance % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) %
                    (1000 * 60)) /
                    1000
            );
            if (distance === 0) {
                clearInterval(interval.current);
            } else if (start === true) {
                setDay(days);
                setHour(hours);
                setMinute(minutes);
                setSecond(seconds);
            }
        }, 1000);
    };
    useEffect(() => {
        timer();
        return () => {
            start = false;
            timer();
            setDay("");
            setHour("");
            setMinute("");
            setSecond("");
            interval = "";
            clearInterval(interval.current);
        };
    }, []);
    return (
        <div className="all">
            <div className="waiting-container">
                <p> I am currently working at this site</p>
                <h1>STAY TUNED!</h1>
                <div className="clock">
                    <span>
                        {day}
                        <label className="day">
                            Day{day > 1 ? "s" : ""}
                        </label>{" "}
                    </span>{" "}
                    <span>
                        {hour}{" "}
                        <label className="hour">
                            Hour{hour > 1 ? "s" : ""}
                        </label>
                    </span>{" "}
                    <span>
                        {minute} <br />
                        <label className="minute">
                            Minute{minute > 1 ? "s" : ""}
                        </label>
                    </span>{" "}
                    <span>
                        {second}{" "}
                        <label className="second">
                            Second{second > 1 ? "s" : ""}
                        </label>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Countdown;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Icons(props) {
    useEffect(() => {
        window.addEventListener("scroll", scroll);
        function scroll() {
            let icon = document.getElementById(`${props.data.id}card`);
            let pos = icon.getBoundingClientRect().top;
            let top = window.innerHeight / 1.3;
            if (pos < top) {
                icon.classList.add("cardup");
            } else {
                icon.classList.remove("cardup");
            }
        }

        return () => window.removeEventListener("scroll", scroll);
    }, []);
    return (
        <>
            <div className="card-container">
                <Link
                    to={`/putyagang/person/${props.data.id}`}
                    style={{ textDecoration: "none" }}
                >
                    <div className="card" id={`${props.data.id}card`}>
                        <img src={`${props.data.img}`} alt="icon" />
                        <p className="name">{props.data.name}</p>
                        <p>
                            <label className="bday">
                                {props.data.birthday}
                            </label>
                        </p>
                        <p>{props.data.age} years old</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Icons;

import React, { useEffect } from "react";

import Putyagang from "../json/pg/putyagang.json";
import Canvas from "./canvas.js";
import Load from "./loading.js";

function Personal({ match }) {
    const id = match.params.id;
    let group;
    if (match.path === "/putyagang/person/:id") {
        group = Putyagang;
    }

    useEffect(() => {
        let facebook = document.querySelector(".facebook");
        let instagram = document.querySelector(".instagram");
        let twitter = document.querySelector(".twitter");
        let gmail = document.querySelector(".gmail");
        let cursor = document.querySelector(".cursor");
        let facebookid = document.getElementById("facebook");
        let instagramid = document.getElementById("instagram");
        let twitterid = document.getElementById("twitter");
        let gmailid = document.getElementById("gmail");
        let profileid = document.getElementById("profile");

        facebookid.addEventListener("mouseover", () => {
            facebook.classList.add("hovering");
        });
        facebookid.addEventListener("mouseleave", () => {
            facebook.classList.remove("hovering");
        });
        instagramid.addEventListener("mouseover", () => {
            instagram.classList.add("hovering");
        });
        instagramid.addEventListener("mouseleave", () => {
            instagram.classList.remove("hovering");
        });
        twitterid.addEventListener("mouseover", () => {
            twitter.classList.add("hovering");
        });
        twitterid.addEventListener("mouseleave", () => {
            twitter.classList.remove("hovering");
        });
        gmailid.addEventListener("mouseover", () => {
            if (group[id].account.Gmail !== "") {
                gmail.classList.add("hovering");
            }
        });
        profileid.addEventListener("mousemove", (e) => {
            cursor.style.display = "block";
            let mouseX = e.offsetX,
                mouseY = e.offsetY;
            cursor.style.left = mouseX + "px";
            cursor.style.top = mouseY + "px";
        });
        profileid.addEventListener("mouseleave", () => {
            cursor.style.display = "none";
        });
        let copyText = document.getElementById("copy");
        gmailid.addEventListener("click", () => {
            if (group[id].account.Gmail !== "") {
                copyText.select();
                // copyText.setSelectionRange(0, 99999);
                document.execCommand("copy");

                alert("Copied the text: " + group[id].account.Gmail);
            }
        });
        gmailid.addEventListener("mouseleave", () => {
            gmail.classList.remove("hovering");
        });
    });
    return (
        <>
            <Load />
            <div className="personal">
                <div className="cursor"></div>
                <div className="personal-container">
                    <h1>{group[id].groupName} </h1>
                    <div className="img-hobbies">
                        <img id="profile" src={`${group[id].img}`} alt="HIII" />
                        <p>
                            HI! My name is {group[id].name} , I'm{" "}
                            {group[id].age} year old becoming{" "}
                            {group[id].description.ambition}. I'm currently
                            studying {group[id].description.strand} in{" "}
                            {group[id].description.school}, and I love{" "}
                            {group[id].description.hobbie.hobbie1.hobbie}, where
                            I show
                            {group[id].description.hobbie.hobbie1.description}.
                        </p>
                    </div>
                </div>
                <div className="contacts">
                    <div>
                        <a id="facebook" href={group[id].account.Facebook}>
                            <img
                                className="icon"
                                src="https://github.com/KingFusions/myprends/blob/gh-pages/imgs/icon/facebook-icon.png?raw=true"
                                alt=""
                            />
                        </a>
                        <div className="hover facebook">
                            <img src={group[id].accountImg.Facebook} alt="" />
                        </div>
                    </div>
                    <div>
                        <a id="instagram" href={group[id].account.Instagram}>
                            <img
                                className="icon"
                                src="https://github.com/KingFusions/myprends/blob/gh-pages/imgs/icon/instagram-icon.png?raw=true"
                                alt=""
                            />
                        </a>
                        <div className="hover instagram">
                            <img src={group[id].accountImg.Instagram} alt="" />
                        </div>
                    </div>
                    <div>
                        <a id="twitter" href={group[id].account.Twitter}>
                            <img
                                className="icon"
                                src="https://github.com/KingFusions/myprends/blob/gh-pages/imgs/icon/twitter-icon.png?raw=true"
                                alt=""
                            />
                        </a>
                        <div className="hover twitter">
                            {group[id].accountImg.Twitter !== "" ? (
                                <img
                                    src={group[id].accountImg.Twitter}
                                    alt=""
                                />
                            ) : (
                                <p>none</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <img
                            id="gmail"
                            className="icon"
                            src="https://github.com/KingFusions/myprends/blob/gh-pages/imgs/icon/gmail-icon.png?raw=true"
                            alt=""
                        />
                        <div className="hover gmail">
                            <input
                                style={{ display: "none" }}
                                id="copy"
                                value={group[id].account.Gmail}
                                type="text"
                            />
                            <p>{group[id].account.Gmail}</p>
                        </div>
                    </div>
                </div>
                <Canvas />
            </div>
        </>
    );
}
export default Personal;

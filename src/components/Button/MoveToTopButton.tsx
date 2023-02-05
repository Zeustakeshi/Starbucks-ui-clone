import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Button from "./Button";
import ArrowUpJSON from "../../assets/up.json";

const MoveToTopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    if (!show) return null;
    return (
        <div id="move-top">
            <a
                href="#"
                className="flex justify-center items-center w-full h-full"
            >
                <Lottie animationData={ArrowUpJSON}></Lottie>
            </a>
        </div>
    );
};

export default MoveToTopButton;

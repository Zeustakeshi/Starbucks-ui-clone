import React from "react";
import "./highlight.css";

interface IHightLight {
    children: React.ReactNode;
    className?: string;
    isAnimation?: boolean;
}

const Highlight = ({
    className,
    children,
    isAnimation = false,
}: IHightLight) => {
    return (
        <div
            className={`${
                isAnimation ? "highlight-animation " : ""
            } inline-block `}
        >
            <span
                className={`${
                    isAnimation ? "highlight-animation-content" : ""
                } text-[#047044] font-extrabold  ${className || ""}`}
            >
                {children}
            </span>
        </div>
    );
};

export default Highlight;

import React from "react";

type ButtonType = "primary" | "secondary";

interface IButton {
    children: React.ReactNode;
    type: ButtonType;
    style?: React.CSSProperties;
}

const Button = ({ type, style, children, ...props }: IButton) => {
    const customClassName = (type: ButtonType): string => {
        switch (type) {
            case "primary":
                return "px-4 py-2 bg-[#047044] text-white rounded-full uppercase text-sm font-medium hover:opacity-80 transition-all";
            case "secondary":
                return "";
            default:
                return "";
        }
    };

    return (
        <button
            style={style}
            className={`button-wrapper button-wrapper--${type}`}
            {...props}
        >
            <div className={`button-content  button-content--${type}`}>
                <span className={`button-text button-text--${type}`}>
                    {children}
                </span>
            </div>
        </button>
    );
};

export default Button;

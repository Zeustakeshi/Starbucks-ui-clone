import React from "react";
import { NavLink } from "react-router-dom";
import "./button.css";

type ButtonType = "primary" | "secondary";

interface IButton {
    children: React.ReactNode;
    type: ButtonType;
    style?: React.CSSProperties;
    to?: string;
}

const Button = ({ type, style, children, to, ...props }: IButton) => {
    return (
        <button
            style={style}
            className={` button-wrapper button-wrapper--${type}`}
            {...props}
        >
            <div className={`button-content  button-content--${type}`}>
                {to ? (
                    <NavLink
                        to={to}
                        className={`button-text button-text--${type}`}
                    >
                        {children}
                    </NavLink>
                ) : (
                    <span className={`button-text button-text--${type}`}>
                        {children}
                    </span>
                )}
            </div>
        </button>
    );
};

export default Button;

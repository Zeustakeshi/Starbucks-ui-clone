import React from "react";
import Highlight from "../../../components/Highlight/Highlight";

interface IMenuList {
    children: React.ReactNode;
    title: string;
    highlightTitle: string;
}

const MenuList = ({ title, highlightTitle, children }: IMenuList) => {
    return (
        <div className="app-container w-full flex flex-col justify-center items-start">
            <MenuListTitle title={title} highlightTitle={highlightTitle} />
            <div className="w-full h-full flex-wrap flex justify-start items-start gap-x-5 gap-y-10">
                {children}
            </div>
        </div>
    );
};

const MenuListTitle = ({
    title,
    highlightTitle,
}: {
    title: string;
    highlightTitle: string;
}) => {
    const firstString = title.substring(0, title.indexOf(highlightTitle));
    const lastString = title.substring(
        title.indexOf(highlightTitle) + highlightTitle.length
    );

    return (
        <h4 className="my-10 text-3xl flex justify-start items-center">
            <span>{firstString}</span>
            <Highlight isAnimation>
                <span className="px-2">{highlightTitle}</span>
            </Highlight>
            <span>{lastString}</span>
        </h4>
    );
};

export default MenuList;

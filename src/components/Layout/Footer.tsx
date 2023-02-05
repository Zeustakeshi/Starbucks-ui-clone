import React from "react";
import Lottie from "lottie-react";
import facebookJSON from "../../assets/facebook.json";
import instagramJSON from "../../assets/instagram.json";
import pinterestJSON from "../../assets/pinterest.json";
import twitterJSON from "../../assets/twitter.json";

interface IFooterInfodata {
    title: string;
    items: string[];
}

const footerInfoData: IFooterInfodata[] = [
    {
        title: "About Us",
        items: [
            "Our Company",
            "Our Coffee",
            "Stories and News",
            "Starbucks Archive",
            "Investor Relations",
            "Customer Service",
        ],
    },
    {
        title: "Careers",
        items: [
            "Culture and Values",
            "Inclusion, Diversity, and Equity",
            "College Achievement Plan",
            "Alumni Community",
            "U.S. Careers",
            "International Careers",
        ],
    },
    {
        title: "Social Impact",
        items: [
            "People",
            " Planet",
            "Environmental and Social Impact Reporting",
        ],
    },
    {
        title: "For Business Partners",
        items: [
            " Landlord Support Center",
            " Suppliers",
            " Corporate Gift Card Sales",
            " Office and Foodservice Coffee",
        ],
    },
    {
        title: "Order and Pickup",
        items: [
            " Order on the App",
            " Order on the Web",
            " Delivery",
            " Order and Pickup Options",
            " Explore and Find Coffee for Home",
        ],
    },
];

const socialIcons = [
    { data: facebookJSON, link: "#" },
    { data: instagramJSON, link: "#" },
    { data: twitterJSON, link: "#" },
    { data: pinterestJSON, link: "#" },
];

const privacyData = [
    { title: "Privacy Notice", link: "#" },
    { title: "Terms of Use", link: "#" },
    { title: "Do Not Share My Personal Information", link: "#" },
    { title: "CA Supply Chain Act", link: "#" },
    { title: "Cookie Preferences", link: "#" },
];

const Footer = () => {
    return (
        <div className="mt-20 w-full flex justify-center items-center bg-slate-50">
            <div className="app-container flex-col justify-between items-center py-8 mb-10">
                <FooterInfo></FooterInfo>
                <FooterSocial></FooterSocial>
                <FooterPrivacy></FooterPrivacy>
                <FooterCopyright></FooterCopyright>
            </div>
        </div>
    );
};

const FooterInfo = () => {
    return (
        <div className="flex justify-between items-start gap-x-4 pb-8 border-b-2 border-gray-300">
            {footerInfoData.map((info: IFooterInfodata, index) => {
                return (
                    <FooterInfoList key={index} info={info}></FooterInfoList>
                );
            })}
        </div>
    );
};

const FooterInfoList = ({ info }: { info: IFooterInfodata }) => {
    const { title, items } = info;
    return (
        <div className="flex-col">
            <p className="text-lg font-medium mb-8">{title}</p>
            <ul className="mt-5">
                {items.map((item: string, index) => {
                    return (
                        <li
                            key={index}
                            className="mt-8 first:mt-0 text-sm text-slate-600"
                        >
                            <a href="">{item}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const FooterSocial = () => {
    return (
        <ul className="mt-8 flex justify-start items-center gap-x-2">
            {socialIcons.map((icon, index) => {
                return (
                    <li
                        key={index}
                        className="w-[60px] h-[60px] cursor-pointer"
                    >
                        <a href={icon.link}>
                            <Lottie animationData={icon.data}></Lottie>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

const FooterPrivacy = () => {
    return (
        <ul className="mt-5 flex justify-start items-center">
            {privacyData.map((privacy, index) => {
                return (
                    <li
                        key={index}
                        className=" border-r border-r-gray-600 last:border-none "
                    >
                        <a className="px-5" href={privacy.link}>
                            {privacy.title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

const FooterCopyright = () => {
    return (
        <p className="mt-5 text-sm font-500 text-gray-400">
            © 2023 Starbucks Coffee Company. All rights reserved.
        </p>
    );
};

export default Footer;

import React from "react";
import Lottie from "lottie-react";
import facebookJSON from "../../assets/facebook.json";
import instagramJSON from "../../assets/instagram.json";
import pinterestJSON from "../../assets/pinterest.json";
import twitterJSON from "../../assets/twitter.json";

type Link = { title: string; link: string };

interface IFooterInfodata {
    title: string;
    items: Link[];
}

const footerInfoData: IFooterInfodata[] = [
    {
        title: "About Us",
        items: [
            {
                title: "Our Company",
                link: "https://www.starbucks.com/about-us/",
            },
            {
                title: "Our Coffee",
                link: "https://www.starbucks.com/coffee/",
            },
            {
                title: "Stories and News",
                link: "https://stories.starbucks.com/",
            },
            {
                title: "Starbucks Archive",
                link: "https://archive.starbucks.com/",
            },
            {
                title: "Investor Relations",
                link: "https://investor.starbucks.com/",
            },
            {
                title: "Customer Service",
                link: "https://customerservice.starbucks.com/",
            },
        ],
    },
    {
        title: "Careers",
        items: [
            {
                title: "Culture and Values",
                link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
            },
            {
                title: "Inclusion, Diversity, and Equity",
                link: "https://stories.starbucks.com/stories/inclusion-diversity/",
            },
            {
                title: "College Achievement Plan",
                link: "https://www.starbucks.com/careers/working-at-starbucks/education/",
            },
            {
                title: "Alumni Community",
                link: "https://alumni.starbucks.com/",
            },
            {
                title: "U.S. Careers",
                link: "https://www.starbucks.com/careers/",
            },
            {
                title: "International Careers",
                link: "https://www.starbucks.com/careers/international-careers/",
            },
        ],
    },
    {
        title: "Social Impact",
        items: [
            {
                title: "People",
                link: "https://starbucks.com/responsibility/people/",
            },
            {
                title: " Planet",
                link: "https://starbucks.com/responsibility/planet/",
            },
            {
                title: "Environmental and Social Impact Reporting",
                link: "https://www.starbucks.com/responsibility/reporting-hub/",
            },
        ],
    },
    {
        title: "For Business Partners",
        items: [
            {
                title: " Landlord Support Center",
                link: "https://www.starbucks.com/business/landlord-faq/",
            },
            {
                title: " Suppliers",
                link: "https://www.starbucks.com/business/suppliers/",
            },
            {
                title: " Corporate Gift Card Sales",
                link: "https://www.starbuckscardb2b.com/",
            },
            {
                title: " Office and Foodservice Coffee",
                link: "https://www.nestlecoffeepartnerssl.com/our-brands/we-proudly-serve-starbucks-coffee-program",
            },
        ],
    },
    {
        title: "Order and Pickup",
        items: [
            {
                title: " Order on the App",
                link: "https://www.starbucks.com/rewards/mobile-apps/",
            },
            {
                title: " Order on the Web",
                link: "https://www.starbucks.com/menu",
            },
            { title: " Delivery", link: "" },
            {
                title: " Order and Pickup Options",
                link: "https://www.starbucks.com/ways-to-order/",
            },
            {
                title: " Explore and Find Coffee for Home",
                link: "https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer",
            },
        ],
    },
];

const socialIcons = [
    { data: facebookJSON, link: "https://facebook.com/starbucks" },
    { data: instagramJSON, link: "https://instagram.com/starbucks" },
    { data: twitterJSON, link: "https://twitter.com/starbucks/" },
    { data: pinterestJSON, link: "https://www.pinterest.com/starbucks/" },
];

const privacyData: Link[] = [
    {
        title: "Privacy Notice",
        link: "https://www.starbucks.com/terms/privacy-policy/",
    },
    {
        title: "Terms of Use",
        link: "https://www.starbucks.com/terms/starbucks-terms-of-use/",
    },
    {
        title: "Do Not Share My Personal Information",
        link: "https://www.starbucks.com/personal-information",
    },
    {
        title: "CA Supply Chain Act",
        link: "https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf",
    },
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
                {items.map((item: Link, index) => {
                    return (
                        <li
                            key={index}
                            className="mt-8 first:mt-0 text-sm text-slate-600"
                        >
                            <a href={item.link}>{item.title}</a>
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

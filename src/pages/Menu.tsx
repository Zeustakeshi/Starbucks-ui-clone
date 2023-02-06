import React from "react";
import MainLayout from "../layout/MainLayout";
import Banner from "../modules/Menu/Banner/Banner";
import MenuItem from "../modules/Menu/MenuIList/MenuItem";
import MenuList from "../modules/Menu/MenuIList/MenuList";

interface IData {
    id: number;
    imgSrc: string;
    rating: number;
    name: string;
    price: string;
    tagName: string[];
}

const data: IData[] = [
    {
        id: 1,
        imgSrc: "https://images.unsplash.com/photo-1617906583422-f707b738a1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        rating: 4.8,
        name: "Vanilla Latte",
        tagName: ["Hot", "Cold"],
        price: "21k",
    },
    {
        id: 2,
        imgSrc: "https://images.unsplash.com/photo-1496379896897-7b57622f431b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        rating: 4.8,
        name: "Espresso",
        tagName: ["Hot", "Cold"],
        price: "21k",
    },
    {
        id: 3,
        imgSrc: "https://images.unsplash.com/photo-1589476993333-f55b84301219?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        rating: 4.8,
        name: "Vanilla Latte",
        tagName: ["Hot", "Cold"],
        price: "21k",
    },
    {
        id: 4,
        imgSrc: "https://images.unsplash.com/photo-1542729779-11d8fe8e25f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        rating: 4.8,
        name: "Espresso",
        tagName: ["Hot", "Cold"],
        price: "21k",
    },
    {
        id: 5,
        imgSrc: "https://images.unsplash.com/photo-1490192083689-bea6dbc796ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        rating: 4.8,
        name: "Vanilla Latte",
        tagName: ["Hot", "Cold"],
        price: "21k",
    },
    {
        id: 6,
        imgSrc: "https://images.unsplash.com/photo-1555423360-4b70660524c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        rating: 4.8,
        name: "Hazelnut Latte",
        tagName: ["Hot", "Cold"],
        price: "21k",
    },
    {
        id: 7,
        imgSrc: "https://images.unsplash.com/photo-1589879171634-dc628cc021f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        rating: 4.8,
        name: "Vanilla Latte",
        tagName: ["Hot", "Cold"],
        price: "21k",
    },
    {
        id: 8,
        imgSrc: "https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1105&q=80",
        rating: 4.8,
        name: "Vanilla Latte",
        tagName: ["Hot", "Cold"],
        price: "21k",
    },
];

const Menu = () => {
    return (
        <MainLayout>
            <Banner></Banner>
            <MenuList title="Popular Now" highlightTitle="Now">
                {data.map((item: IData, index: number) => {
                    return <MenuItem key={index} data={item} />;
                })}
            </MenuList>
            <MenuList title="Special menu for you" highlightTitle="for you">
                {data.map((item: IData, index: number) => {
                    return <MenuItem key={index} data={item} />;
                })}
            </MenuList>
        </MainLayout>
    );
};

export default Menu;

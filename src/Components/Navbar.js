import React, { useState } from "react";
import Logo from "../Assets/Images/logo.png";
import "../Assets/CSS/navbar.css";

function Navbar() {
    const [isWhite, setIsWhite] = useState(true);
    const navColor = () => {
        if (window.scrollY >= 600) {
            setIsWhite(false);
        } else {
            setIsWhite(true);
        }
    };
    window.addEventListener("scroll", navColor);
    return (
        <div
            className={`fixed w-full flex justify-between px-6 z-50 h-[15vh] ${
                isWhite ? "navBackground" : "bg-white z-100"
            }`}
        >
            <img className="h-[15vh]" src={Logo} alt="" />
            <div className="flex justify-evenly items-center">
                <p className="text-black font-semibold my-4 px-4 text-[17px] cursor-pointer hover:text-[#ED560B]">
                    For Business
                </p>
                <p className="text-black font-semibold my-4 px-4 text-[17px] cursor-pointer hover:text-[#ED560B]">
                    Contact Us
                </p>
                <p className="text-[17px] my-4 mx-2 px-4 border-[#ED560B] font-semibold border-2 cursor-pointer hover:text-[#ffffff] hover:bg-[#ED560B] rounded-xl">
                    Login
                </p>
                <p className="text-[17px] my-4 mx-2 px-4 border-[#ED560B] font-semibold border-2 cursor-pointer hover:text-[#ffffff] hover:bg-[#ED560B] rounded-xl">
                    Sign Up
                </p>
            </div>
        </div>
    );
}

export default Navbar;

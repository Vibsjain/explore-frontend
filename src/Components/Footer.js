import React from "react";
import logo from "../Assets/Images/logo.png";
import instagram from "../Assets/Images/instagram.png";
import twitter from "../Assets/Images/twitter.png";
import linkedin from "../Assets/Images/linkedin.png";

const Footer = () => {
    const footerLinks = [
        {
            title: "About",
            links: "/about",
        },
        {
            title: "Community",
            links: "/community",
        },
        {
            title: "Careers",
            links: "/careers",
        },
        {
            title: "Terms of Service",
            links: "/terms-of-service",
        },
        {
            title: "Privacy Policy",
            links: "/privacy-policy",
        },
    ];
    return (
        <div className="flex w-full h-[25rem]">
            <div className="flex flex-col w-9/12">
                <div className="flex gap-4 w-full p-12 items-center h-[5rem] mt-8">
                    <button className="bg-[#ED560B] rounded-lg px-8 py-2 h-[3rem] button-shadow mx-8">
                        <h1 className="text-white text-[16px]">Contact Us</h1>
                    </button>
                    <div className="flex justify-center h-[3rem] items-center gap-12">
                        {footerLinks.map((link) => (
                            <div className="flex flex-col gap-4">
                                <h1 className="text-[#3A3A3A] text-[16px] font-bold">
                                    {link.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-full h-full px-[16rem] my-[3rem]">
                    <h1>&#169; 2022 AmieExplore Ltd</h1>
                    <ul className="flex gap-4">
                        <h1>&#x25CF; Legal Informations</h1>
                        <h1>&#x25CF; Settings</h1>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-3/12  justify-evenly items-center py-4">
                <img src={logo} className="w-[15rem] h-[15rem]" alt="" />
                <div className="flex">
                    <h1 className="text-[20px] text-[#3A3A3A] font-medium">
                        Follow Us -{" "}
                    </h1>
                    <div className="flex gap-2">
                        <img
                            src={instagram}
                            className="w-[2rem] h-[2rem] ml-4"
                            alt=""
                        />
                        <img src={twitter} className="w-[2rem] h-[2rem] ml-4" alt="" />
                        <img
                            src={linkedin}
                            alt=""
                            className="w-[2rem] h-[2rem] ml-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

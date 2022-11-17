import React, { useState } from "react";
import ActivityCard from "./ActivityCard";
import Avator from "../Assets/Images/avator.png";
import homeTop from "../Assets/Images/homeTop.png";

function RecentActivity() {
    const [extend, setExtend] = useState(false);
    const data = [
        {
            userImage: Avator,
            userName: "Abhinav",
            restImage: homeTop,
            restName: "Krishna Cafe",
            star: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        },
        {
            userImage: Avator,
            userName: "Abhinav",
            restImage: homeTop,
            restName: "Krishna Cafe",
            star: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        },
        {
            userImage: Avator,
            userName: "Abhinav",
            restImage: homeTop,
            restName: "Krishna Cafe",
            star: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        },
        {
            userImage: Avator,
            userName: "Abhinav",
            restImage: homeTop,
            restName: "Krishna Cafe",
            star: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        },
        {
            userImage: Avator,
            userName: "Abhinav",
            restImage: homeTop,
            restName: "Krishna Cafe",
            star: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        },
        {
            userImage: Avator,
            userName: "Abhinav",
            restImage: homeTop,
            restName: "Krishna Cafe",
            star: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        },
    ];
    return (
        <div className="flex flex-col flex-wrap justify-center items-center bg-[#EDEDED]">
            <p className="text-[45px] font-semibold py-10 z-[1]">
                Recent Activities
            </p>
            {!extend ? (
                <div className="flex flex-wrap justify-evenly my-4">
                    {data.map((item) => (
                        <ActivityCard
                            userImage={item.userImage}
                            userName={item.userName}
                            restImage={item.restImage}
                            restName={item.restName}
                            star={item.star}
                            review={item.review}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-wrap justify-evenly my-4">
                    {data.slice(0, 6).map((item) => (
                        <ActivityCard
                            userImage={item.userImage}
                            userName={item.userName}
                            restImage={item.restImage}
                            restName={item.restName}
                            star={item.star}
                            review={item.review}
                        />
                    ))}
                </div>
            )}
            {extend ? (
                <div className="my-4">
                    <button
                        className="text-[24px] text-[#3A3A3A]"
                        onClikc={() => setExtend(!extend)}
                    >
                        See More Activity
                    </button>
                </div>
            ) : (
                <div className="my-4">
                    <button
                        className="text-[24px] text-[#3A3A3A]"
                        onClikc={() => setExtend(!extend)}
                    >
                        See Less Activity
                    </button>
                </div>
            )}
        </div>
    );
}

export default RecentActivity;

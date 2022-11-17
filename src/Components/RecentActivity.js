import ActivityCard from "./ActivityCard";
import Avator from "../Assets/Images/avator.png";
import homeTop from "../Assets/Images/homeTop.png";

function RecentActivity() {
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
    ];
    return (
        <div className="flex flex-col flex-wrap justify-center items-center bg-[#EDEDED]">
            <p className="text-[45px] font-semibold py-10 z-[1]">
                Recent Activities
            </p>
            <div className="flex flex-wrap justify-evenly my-8">
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
        </div>
    );
}

export default RecentActivity;

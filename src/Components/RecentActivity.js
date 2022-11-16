import ActivityCard from "./ActivityCard";

function RecentActivity(){
    return(
        <div className="flex flex-col flex-wrap justify-center items-center bg-[#EDEDED]">
            <p className="text-[45px] font-semibold py-10 z-[1000]">Recent Activities</p>
            <div className="flex flex-wrap justify-evenly my-8">
                <ActivityCard />
            </div>
        </div>
    )
}

export default RecentActivity;
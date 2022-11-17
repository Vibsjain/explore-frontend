import Navbar from "../Components/Navbar";
import "../Assets/CSS/home.css";
import Catergories from "../Components/Categories";
import RecentActivity from "../Components/RecentActivity";
import Footer from "../Components/Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="homeTop flex flex-col justify-center items-center">
                <p className="text-[50px] font-semibold">
                    Let's Explore Nearby
                </p>
            </div>
            <Catergories />
            <RecentActivity />
            <Footer />
        </div>
    );
}

export default Home;

import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import RightSideNav from "../../components/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import Header from "./Header";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="font-popins" >
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

        <div className="text-4xl mt-20 font-popins grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border">
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="border col-span-2">
        News Comming Soon
            </div>
            <div className="">
        <RightSideNav></RightSideNav>
            </div>
        </div>


        </div>
    );
};

export default Home;
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="font-popins container mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
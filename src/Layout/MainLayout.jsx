import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="my-2">

            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;
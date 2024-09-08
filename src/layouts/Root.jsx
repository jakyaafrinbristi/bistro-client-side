import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            {/* outlet  */}
            <Outlet></Outlet>
            {/* footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default Root;
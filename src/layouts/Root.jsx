import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Root = () => {
    const location=useLocation()
    console.log(location)
    const noNavFoot=location.pathname.includes('login') || location.pathname.includes('register') 
    
    return (
        <div>
            {/* navbar */}
            {noNavFoot || <Navbar></Navbar>}
            {/* outlet  */}
            <Outlet></Outlet>
            {/* footer */}
           {noNavFoot || <Footer></Footer>}
            
        </div>
    );
};

export default Root;
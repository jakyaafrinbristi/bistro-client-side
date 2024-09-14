import { FaAd, FaCalendar, FaHome, FaList, FaMoneyBill, FaShoppingBasket, FaUsers, FaUtensils } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiBriefcaseFill } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin =true;
    return (
        <div className="flex px-10">
            <div className="w-64 min-h-screen bg-amber-700">
                 <ul className="menu space-y-7 font-bold uppercase">
                 <div className="divider"></div>
                    {
                        isAdmin ?
                        <> <li>
                       
                        <NavLink to='/dashboard/adminHome'>
                       <FaHome></FaHome>
                        Admin Home</NavLink>
                        </li> 
                    <li>
                       
                        <NavLink to='/dashboard/addItems'>
                       <FaUtensils></FaUtensils>
                        Add Items</NavLink>
                        </li> 
                  
                    <li>
                        
                        <NavLink to='/dashboard/manageItems'>
                        <FaList></FaList>
                        Manage Items</NavLink>
                        </li>
                    <li>
                        
                        <NavLink to='/dashboard/manageBooking'>
                        <FaAd></FaAd>
                        Manage Booking</NavLink>
                        </li>
                  
                    <li>
                        
                        <NavLink to='/dashboard/users'>
                        <FaUsers />All Users
                        </NavLink>
                        </li></> :<> 
                        <li>
                       
                        <NavLink to='/dashboard/userHome'>
                       <FaHome></FaHome>
                        User Home</NavLink>
                        </li> 
                    <li>
                       
                        <NavLink to='/dashboard/reservation'>
                       <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                        </li> 
                    <li>
                       
                        <NavLink to='/dashboard/payment'>
                       <FaMoneyBill></FaMoneyBill>
                        Payment History</NavLink>
                        </li> 
                    <li>
                        
                        <NavLink to='/dashboard/cart'>
                        <FaShoppingBasket></FaShoppingBasket>
                        My Cart</NavLink>
                        </li>
                    <li>
                        
                        <NavLink to='/dashboard/review'>
                        <TbStarsFilled />
                        Add Review</NavLink>
                        </li>
                  
                    <li>
                        
                        <NavLink to='/dashboard/booking'>
                        <RiBriefcaseFill />My booking
                        </NavLink>
                        </li></>

                    }
              
                   


                        <div className="divider font-bold"></div>
                        <li>
                       
                       <NavLink to='/'>
                      <FaHome></FaHome>
                     Home</NavLink>
                       </li> 
                        <li>
                       
                       <NavLink to='/order/desserts'>
                       <GiHamburgerMenu/>

                     Menu</NavLink>
                       </li> 
                        <li>
                       
                       <NavLink to='/order/contact'>
                    <FaVoicemail></FaVoicemail>

                     Contact</NavLink>
                       </li> 
                 </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../../hooks/useCart";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [cart]=useCart()
  const navId = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Menu</Link></li>
    <li><Link to='/order/desserts'>Order Menu</Link></li>
    <li><Link to='/dashboard/cart'>
    <IoCartOutline  className="text-xl"/>

      <div className="badge badge-secondary">+{cart.length}</div>
    </Link></li>


    <li><Link to='/register'>Register</Link></li>

  </>
  return (
    <div>
      <div className="navbar fixed z-10 bg-black text-white max-w-screen-xl mx-auto bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navId}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BistroBoss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navId}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full" title={user?.displayName}>
                  <img src={user?.photoURL || "https://i.ibb.co/YTdqfn2/received-716442737097136.jpg"} />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content w-52 z-[2]  rounded-box ">


                <li>
                  <button
                    onClick={logOut}
                    className="btn btn-sm  btn-ghost">Logout</button>

                </li>
              </ul>
            </div>
              :
              <Link to='/login'>
                Login
              </Link>
          }


        </div>
      </div>


    </div>
  );
};

export default Navbar;
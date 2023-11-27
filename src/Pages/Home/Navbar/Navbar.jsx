
import { FaRegCircleUser } from "react-icons/fa6";
import { Link} from "react-router-dom";
import logo from '../../../assets/flow.png'

const Navbar = () => {
    const navLinks = <>

        <li><Link>Home</Link></li>
        <li><Link>Products</Link></li>
        <li><Link>Login</Link></li>
       

    </>
    return (
        <div>
            <div className="navbar bg-black bg-opacity-30  z-10 fixed text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }


                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl"><img src={logo} alt="" className="w-20 rounded-sm" /> <span>FLOW TECH</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {
                        navLinks
                       }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className=" rounded-full">
                                <FaRegCircleUser className="w-full" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                name
                            </li>
                            <li><Link>DashBoard</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import { Link, NavLink} from "react-router-dom";
import logo from '../../../assets/flow.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import "./Navbar.css"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
   

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLinks = <>

        <li className="lg:text-xl hover:text-teal-700"><NavLink to={"/"}>Home</NavLink></li>
        <li className="lg:text-xl hover:text-teal-700"><NavLink to={'/products'}>Products</NavLink></li>
        {
            user ? '' : <li className="lg:text-xl hover:text-teal-700"><NavLink to={'/login'}>Login</NavLink></li>
        }



    </>
    return (
        <div>
            <div className="navbar bg-black bg-opacity-30 z-10 fixed text-white px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {
                                navLinks
                            }


                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl"><span>FLOW TECH</span></Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="flex space-x-10 px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                {
                    user ? <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className=" rounded-full">
                            <img src={user.photoURL
                            } alt="" className="rounded-full" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li className="text-center">
                            {user?.displayName}
                            </li>
                            <li><Link to={'/dashboard'}>DashBoard</Link></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                </div>
                : <div className="navbar-end"></div>
                }
                
            </div>
        </div>
    );
};

export default Navbar;
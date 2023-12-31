import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/flow.png'
import { FaBars, FaChartLine, FaHome, FaList, FaShoppingBag, FaTag, FaUsers } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useModerator from '../hooks/useModerator';
import useAuth from '../hooks/useAuth';

const DashBoard = () => {
    const {user} = useAuth()
    const [isAdmin] = useAdmin();
    const [isModerator] = useModerator()
    return (
        <div>
            <div className="flex">
                {/* dashboard sidebar */}
                <div className="w-64 min-h-screen bg-fuchsia-400 p-4">
                    <div className="text-center mb-10">
                        <img src={logo} className='w-20' alt="" />
                        <h2 className="text-3xl font-bold uppercase">Flow Tech</h2>
                    </div>
                    <ul className="menu text-lg">
                        {user && isAdmin && <>
                                <li><Link to="/dashboard/statistics">
                                    <FaChartLine></FaChartLine>Statistics</Link>
                                </li>
                                <li><Link to="/dashboard/users">
                                   <FaUsers></FaUsers>Manage Users </Link>
                                </li>
                                <li><Link to="/dashboard/coupon">
                                    <FaTag></FaTag>Manage Coupons </Link>
                                </li>
                            </>}

                            {user && isModerator &&  <>
                                <li><Link to="/dashboard/productReview">
                                    <FaChartLine></FaChartLine>Product Review</Link>
                                </li>
                                <li><Link to="/dashboard/reported">
                                   <FaUsers></FaUsers>Reported Content </Link>
                                </li>
                                </>}

                            {user && !isAdmin && !isModerator && <>
                                    <li><Link to="/dashboard/userProfile">
                                        <FaHome></FaHome> User Profile</Link>
                                    </li>
                                    <li><Link to="/dashboard/addProduct">
                                        <FaShoppingBag></FaShoppingBag>Add Products</Link>
                                    </li>
                                    <li><Link to="/dashboard/myProduct">
                                        <FaList></FaList> My Products</Link>
                                    </li>
                                </> }    
                        {/* {
                            isAdmin ? <>
                                <li><Link to="/dashboard/statistics">
                                    <FaChartLine></FaChartLine>Statistics</Link>
                                </li>
                                <li><Link to="/dashboard/users">
                                   <FaUsers></FaUsers>Manage Users </Link>
                                </li>
                                <li><Link to="/dashboard/coupon">
                                    <FaTag></FaTag>Manage Coupons </Link>
                                </li>
                            </>
                               :
                               
                               ( isModerator ? <>
                                <li><Link to="/dashboard/productReview">
                                    <FaChartLine></FaChartLine>Product Review</Link>
                                </li>
                                <li><Link to="/dashboard/reported">
                                   <FaUsers></FaUsers>Reported Content </Link>
                                </li>
                                </>
                               :
                               <>
                                    <li><Link to="/dashboard/userProfile">
                                        <FaHome></FaHome> User Profile</Link>
                                    </li>
                                    <li><Link to="/dashboard/addProduct">
                                        <FaShoppingBag></FaShoppingBag>Add Products</Link>
                                    </li>
                                    <li><Link to="/dashboard/myProduct">
                                        <FaList></FaList> My Products</Link>
                                    </li>
                                </>)
                        } */}
                    


                        {/* shared list*/}
                        <div className="divider"></div>
                        <li><Link to="/">
                            <FaHome></FaHome>Home</Link>
                        </li>
                        <li><Link to="/products">
                            <FaBars></FaBars>Products</Link>
                        </li>
                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
import { FaUserShield, FaUserTie } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";



const AllUsers = () => {
    const [users] = useUsers()
    return (
        <div>
            <div className="flex justify-around">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto mt-20">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Make moderator</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                           {
                            users?.map((user,index) => <tr key={user._id} >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn text-xl text-red-500"> <FaUserTie></FaUserTie></button>
                            </td>
                            <td>
                            <button className="btn text-xl text-red-500"> <FaUserShield></FaUserShield></button>
                            </td>
                        </tr>)
                           }
                            
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
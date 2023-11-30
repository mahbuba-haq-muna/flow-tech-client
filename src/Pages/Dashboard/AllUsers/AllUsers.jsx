import { FaUser, FaUserShield, FaUserTie } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const AllUsers = () => {
    const [users, refetch] = useUsers();
    const axiosSecure = useAxiosSecure()

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`users/admin/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleMakeModerator = user =>{
        axiosSecure.patch(`/users/moderator/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an moderator now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
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
                                {
                                    user.role === 'admin' ? <button className="btn text-xl text-red-500"> <FaUserTie></FaUserTie>Admin</button>
                                    :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn  text-red-500"> <FaUser></FaUser></button>
                                }
                                
                            </td>
                            <td>
                                {
                                    user.role === 'moderator' ? <button className="btn text-xl text-red-500"> <FaUserShield></FaUserShield>Moderator</button>
                                    :
                                    <button onClick={() => handleMakeModerator(user)} className="btn  text-red-500"> <FaUser></FaUser></button>
                                }
                            
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
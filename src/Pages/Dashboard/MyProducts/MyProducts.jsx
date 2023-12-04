import { FaEdit, FaTrash } from "react-icons/fa";
import useItems from "../../../hooks/useItems";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const MyProducts = () => {
    const axiosSecure = useAxiosSecure()
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/myItems/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const [myItems, refetch] = useItems()
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>external link</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myItems?.map(item =><tr key={item._id}>
                           
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {item.link}
                                </td>
                                <td><button className="btn">pending</button></td>
                                <th>
                                    <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn btn-ghost btn-xs"><FaEdit className="text-2xl text-blue-500"></FaEdit></button></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrash className="text-2xl text-red-500"></FaTrash></button>
                                </th>
                            </tr>)
                        }
                        
                        </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;
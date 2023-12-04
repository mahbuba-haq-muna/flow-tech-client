import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useItems from "../../../hooks/useItems";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaTrash } from "react-icons/fa";


const ProductReview = () => {
    const axiosSecure = useAxiosSecure()

    const handleMakeFeatured = async ()=>{
         
        const productsRes = await axiosSecure.put(`/featured`, myItems);
        console.log(productsRes.data)
        if(productsRes.data.modifiedCount){
            // show success popup
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: ` is updated to the menu.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }

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
                            <th>Make Featured</th>
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
                                <td><button onClick={() =>handleMakeFeatured()} className="btn">Featured</button></td>
                                <th>
                                    <Link to={`/dashboard/details/${item._id}`}><button className="btn btn-ghost btn-xs"><FaInfoCircle className="text-2xl text-blue-500"></FaInfoCircle> </button></Link>
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

export default ProductReview;
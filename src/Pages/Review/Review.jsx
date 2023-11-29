import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Review = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const axiosSecure = useAxiosSecure()

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const email = user.email;
        const name = user.displayName;
        const description =form.description.value;
        const ratings = form.ratings.value
        const reviewData = {
            email, name, description, ratings, 
        } 

        axiosSecure.post(`/reviews`, reviewData)
        .then(res =>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your review has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

       
       console.log(reviewData)
                navigate(from, { replace: true })
            
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleReview} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" className="border-2" id="" cols="20" rows="5"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="number" name="ratings" placeholder="out of 5" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-teal-500">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Review;
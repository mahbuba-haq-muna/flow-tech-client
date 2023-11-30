

const AddProducts = () => {
    return (
        <div>
            <div className="card  w-full md:w-1/2  shadow-2xl bg-base-100">
                <h1 className="text-2xl text-teal-700 text-center font-bold pt-10">Register Now</h1>
                    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true } ) } name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <p className="text-red-500">Name is required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true } ) }  placeholder="photoURL" className="input input-bordered" />
                            {errors.photoURL && <p className="text-red-500">Photo is required</p>}
                        </div>
                        

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        {errors.email && <span className="text-red-500">Email is required</span>}

                        
                       
                        
                        <div className="form-control mt-6">
                            <input className="btn bg-teal-500" type="submit" value="Sign Up" />
                        </div>
                        
                    </form>
                    
                </div>
        </div>
    );
};

export default AddProducts;
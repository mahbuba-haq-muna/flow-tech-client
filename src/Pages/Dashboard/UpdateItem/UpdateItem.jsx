import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const UpdateItem = () => {
    const {items} = useLoaderData()
    const {register,handleSubmit, reset, } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post( image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const newProducts = {
                name: data.name,
                link: data.link,
                description: data.description,
                image: res.data.data.display_url
            }
            
            const productsRes = await axiosSecure.post('/myItems', newProducts);
            console.log(productsRes.data)
            if(productsRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        
    };
    return (
        <div>
             <div>
           <div className="  p-10  ">
            <h1 className=" text-4xl text-center mt-10 mb-5 font-bold text-teal-700 ">update Product</h1>
           
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text"> Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={items.name}
                            placeholder="Product Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">External Link*</span>
                            </label>
                            <input
                            defaultValue={items.link}
                                type="text"
                                placeholder="link"
                                {...register('link', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                       

                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea defaultValue={items.description} {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input defaultValue={items.image} {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item 
                    </button>
                </form>
        </div>
        </div>
        </div>
    );
};

export default UpdateItem;
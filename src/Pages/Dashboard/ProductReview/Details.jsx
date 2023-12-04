import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const product = useLoaderData()
    console.log(product)
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-1/2"><img src={product.image} alt="Album" /></figure>
                <div className="card-body w-1/2 mt-10">
                    <h2 className="card-title text-teal-700">{product.name}</h2>
                    <p className="my-5"> Tags: {product.tags.map((tag, index) => (
                                    <span key={index}>[tag]{index < product.tags.length - 1 ? ', ' : ''}</span>
                                ))}</p>
                    <p className="font-bold">{product.description}</p>            
                    <p className="text-teal-700">Upvotes: {product.upvotes}</p>            
                    <div className="card-actions justify-end">
                        <button className="btn bg-teal-500">report</button>
                        <Link product={product} to={`/products/${product._id}/review`} className="btn bg-teal-500">Review Product</Link>
                    </div>
                </div>
            </div>
            <div className="my-20">
                <h1 className="text-3xl font-bold text-teal-700 text-center pb-10">Reviews</h1>
                        
            </div>
        </div>
    );
};

export default Details;
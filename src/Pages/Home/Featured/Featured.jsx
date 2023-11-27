import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";


const Featured = () => {

    const handleUpvote = (productId) => {
    setProduct((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId ? { ...product, upvotes: product.upvotes + 1 } : product
      );
    });
}
    const handleDownvote = (productId) => {
        setProduct((prevProducts) => {
            return prevProducts.map((product) =>
              product.id === productId ? { ...product, downvotes: product.downvotes + 1 } : product
            );
          });
    };

    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

   
    return (
        <section className="my-20 px-10">
            <h1 className="text-center text-3xl font-bold pb-10 text-teal-700">Featured Products</h1>
            <div className=" grid lg:grid-cols-4 gap-5">
                {
                    products?.map(product => <div key={product.id}>
                        <div className="card border-b-2 border-fuchsia-500 bg-fuchsia-50">
                            <figure><img src={product.image} alt="Shoes" className="h-56" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title">{product.name}</h2>
                                <p className="text-center text-gray-400">date: {product.date}</p>
                                <p className="my-5"> Tags: {product.tags.map((tag, index) => (
                                    <span key={index}>{tag}{index < product.tags.length - 1 ? ', ' : ''}</span>
                                ))}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn" onClick={() => handleUpvote(product.id)}>
                                        <FaArrowUp className="text-2xl text-red-500"></FaArrowUp>
                                        <span className="badge badge-sm indicator-item">{product.upvotes}</span></button>
                                    <button className="btn" onClick={() => handleDownvote(product.id)}><FaArrowDown className="text-2xl text-red-500"></FaArrowDown>
                                        <span className="badge badge-sm indicator-item">{product.downvotes}</span></button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Featured;
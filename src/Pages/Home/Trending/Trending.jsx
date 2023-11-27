import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";


const Trending = () => {

    const [trendingProducts, setTrendingProduct] = useState([])
    useEffect(() => {
        fetch('trending.json')
            .then(res => res.json())
            .then(data => {
                setTrendingProduct(data)
            })
    }, [])

    const handleUpvote = (productId) => {
        setTrendingProduct((prevProducts) => {
          return prevProducts.map((product) =>
            product.id === productId ? { ...product, upvotes: product.upvotes + 1 } : product
          );
        });
    }
        const handleDownvote = (productId) => {
            setTrendingProduct((prevProducts) => {
                return prevProducts.map((product) =>
                  product.id === productId ? { ...product, downvotes: product.downvotes + 1 } : product
                );
              });
        };

        const sortedProducts = [...trendingProducts].sort((a, b) => b.upvotes - a.upvotes);

    return (
        <div>
            <section className="my-20 px-10">
            <h1 className="text-center text-3xl font-bold pb-10 text-teal-700">Trending Products</h1>
            <div className=" grid lg:grid-cols-3 gap-8">
                {
                    sortedProducts?.map(product => <div key={product.id}>
                        <div className="card border-b-2 border-teal-500 bg-teal-50">
                            <figure><img src={product.image} alt="Shoes" className="h-56" /></figure>
                            <div className="card-body h-72 ">
                                <h2 className="card-title">{product.name}</h2>
                                <p className=" text-gray-400">date: {product.date}</p>
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
        </div>
    );
};

export default Trending;

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/Samsung-Galaxy-S22-Ultra-reaches-in-India-with-Green-Color.jpg'
import img2 from '../../assets/Sony-a7-IV-1.jpg'
import img3 from '../../assets/Garmin_D2_Air-2.jpg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";



const AllProducts = () => {
    const [search, setSearch] = useState('')
    const {user} = useAuth()

    const handleSearch= e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText)
    }
    const [products, setProduct] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/products?search=${search}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setProduct(data)
    //         })
    // }, [search])
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    const handleUpvote = (productId) => {
        setProduct((prevProducts) => {
          return prevProducts.map((product) =>
            product._id === productId ? { ...product, upvotes: product.upvotes + 1 } : product
          );
        });
    }
        const handleDownvote = (productId) => {
            setProduct((prevProducts) => {
                return prevProducts.map((product) =>
                  product._id === productId ? { ...product, downvotes: product.downvotes + 1 } : product
                );
              });
        };
        const sortedProducts = [...products].sort((a, b) => b.upvotes - a.upvotes);
    
    return (
        <div>
            <div className="py-10">
                
                <h1 className="text-center pt-4 text-3xl font-bold pb-10 text-teal-700">Raising Products</h1>
                <div>
                    <Carousel  autoPlay={true} infiniteLoop={true} interval={10000} showThumbs={false}>
                        <div>
                            <img src={img1} className="h-screen" />

                        </div>
                        <div>
                            <img src={img2} className="h-screen" />

                        </div>
                        <div>
                            <img src={img3} className="h-screen" />

                            

                        </div>
                    </Carousel>
                </div>
                <div className="pt-10 flex justify-center">
                    <form onSubmit={handleSearch}>
                        <input type="search" name="search" id="" className="border-2 border-gray-400 px-24 py-2 rounded-l-lg" />
                        <input type="submit" value="search" className="bg-teal-500 rounded-l-none btn" />
                    </form>
                </div>
                <section className="my-20 px-10">
            <h1 className="text-center text-3xl font-bold pb-10 text-teal-700">All Products: {products.length}</h1>
            <div className=" grid lg:grid-cols-4 gap-5">
                {
                    sortedProducts?.map(product => <div key={product._id}>
                        <div className="card border-b-2 border-fuchsia-500 bg-fuchsia-50">
                            <figure><img src={product.image} alt="Shoes" className="h-56" /></figure>
                            <div className="card-body h-72">
                                <Link to={`/products/${product._id}`} 
                                ><h2 className="card-title">{product.name}</h2></Link>
                                <p className="text-center text-gray-400">date: {product.date}</p>
                                <p className="my-5"> Tags: {product.tags.map((tag, index) => (
                                    <span key={index}>{tag}{index < product.tags.length - 1 ? ', ' : ''}</span>
                                ))}</p>
                                <div className="card-actions justify-center">
                                {
                                            user? <button className="btn" onClick={() => handleUpvote(product._id)}>
                                            <FaArrowUp className="text-2xl text-red-500"></FaArrowUp>
                                            <span className="badge badge-sm indicator-item">{product.upvotes}</span></button>
                                            :
                                            <Link to={'/login'}><button className="btn"><FaArrowUp className="text-2xl text-red-500"></FaArrowUp></button></Link>
                                        }
                                        
                                        {
                                            user? <button className="btn" onClick={() => handleDownvote(product._id)}><FaArrowDown className="text-2xl text-red-500"></FaArrowDown>
                                            <span className="badge badge-sm indicator-item">{product.downvotes}</span>
                                            </button>
                                            :
                                            <Link to={'/login'}><button className="btn"><FaArrowUp className="text-2xl text-red-500"></FaArrowUp></button></Link>
                                        }
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
            </div>
        </div>
    );
};

export default AllProducts;


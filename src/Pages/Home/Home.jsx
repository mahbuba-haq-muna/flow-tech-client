import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Trending from "./Trending/Trending";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Trending></Trending>
            <div className="mb-10 flex justify-center">
                <button className="btn bg-teal-500"><Link to={'/products'}>View All Products</Link></button>
            </div>
        </div>
    );
};

export default Home;
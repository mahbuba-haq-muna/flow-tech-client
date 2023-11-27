import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} interval={10000} showThumbs={false}>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.imgur.com/2iGBuCr.jpg)` }}>
                        <div className=" bg-opacity-30"></div>
                        <div className="text-left w-full pl-10">
                            <h1 className="mb-5 text-5xl font-bold">Elevate Your Lifestyle with <br />Next-Gen Gadgets</h1>
                            <p className="mb-5">Transform your daily life with the latest in smart and innovative tech.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.imgur.com/XFuoFEr.jpg)`, backgroundSize: 'cover' }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="text-end ml-96">
                            <h1 className="mb-5 text-5xl font-bold ">Smart Living, Smarter Choices</h1>
                            <p className="mb-5 text-xl">Upgrade your lifestyle with our collection of intelligent and connected devices.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.imgur.com/0Pl6W3o.jpg)`, backgroundSize: 'cover' }}>
                        <div className=" bg-opacity-10"></div>
                        <div className="text-center">
                                <h1 className="mb-5 text-5xl font-bold">Innovate Your World</h1>
                                <p className="mb-5">Be the first to experience the future with our latest tech arrivals</p>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;
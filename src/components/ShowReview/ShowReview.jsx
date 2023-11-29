import { Carousel } from "react-responsive-carousel";
import useReview from "../../hooks/useReview";
import { FaQuoteLeft } from "react-icons/fa";


const ShowReview = () => {
    const [reviews] = useReview()
    return (
        <div>
            
             <Carousel autoPlay={true} infiniteLoop={true} interval={10000} showThumbs={false}>
                
            {
                reviews?.map(review =><div key={review._id}>
                    <div className="w-1/2 mx-auto">
                    <FaQuoteLeft className="text-6xl w-full mx-auto mb-8 text-orange-500"></FaQuoteLeft>
                        <h1 className="text-2xl">{review.name}</h1>
                        <p>{review.description}</p>
                        <p className="text-2xl font-bold text-red-500">Ratings: {review.ratings}</p>
                    </div>
                </div>)
            }
            
        </Carousel>
        </div>
    );
};

export default ShowReview;
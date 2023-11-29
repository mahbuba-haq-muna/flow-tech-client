
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useReview = () => {
    const axiosSecure = useAxiosSecure()
    const {data: reviews = []} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/reviews')
            return res.data
        }
        
    })
    
    return [reviews]
   
};
export default useReview;
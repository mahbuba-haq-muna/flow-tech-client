import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useProducts = () => {
    const axiosSecure = useAxiosSecure()
    const {data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/products')
            return res.data
        }
        
    })
    
    return [products]
   
};

export default useProducts;
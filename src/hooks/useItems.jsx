import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useItems = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch, data: myItems = []} = useQuery({
        queryKey: ['myItems'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/myItems')
            return res.data
        }
        
    })
    
    return [myItems,refetch]
};

export default useItems;
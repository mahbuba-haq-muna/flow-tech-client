import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useModerator = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isModerator, isPending: isModeratorLoading } = useQuery({
        queryKey: [user?.email, 'isModerator'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is moderator', user)
            const res = await axiosSecure.get(`/users/moderator/${user.email}`);
            console.log(res.data);
            return res.data?.moderator;
        }
    })
    return [isModerator, isModeratorLoading]
};

export default useModerator;
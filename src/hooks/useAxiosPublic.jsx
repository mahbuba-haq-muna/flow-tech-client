import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://flow-tech-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;
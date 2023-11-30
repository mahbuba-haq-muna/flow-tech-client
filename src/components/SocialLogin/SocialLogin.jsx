
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const {  googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGoogleSignIn = e => {
        e.preventDefault();
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
            .catch(error => {
                console.error(error)

            })

    }

    return (
        <div>
            <div className='w-2/3 mx-auto'>
            <div className="divider"></div>
                <Link><button onClick={handleGoogleSignIn} className="btn w-full items-center  mb-5"> <FaGoogle className="text-xl mr-3 text-blue-500 "></FaGoogle> Log in With Google</button></Link>
            </div>
        </div>
    );
};

export default SocialLogin;
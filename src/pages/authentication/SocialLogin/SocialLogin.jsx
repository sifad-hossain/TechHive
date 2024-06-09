import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const SocialLogin = () => {

    const { googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()


    //navigation systems
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    console.log(from);

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(from)
                    })
            });
    }


    return (
        <>
            <div className="flex items-center pt-4 space-x-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <p className="text-sm text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="flex justify-center space-x-2 border-2 border-indigo-200   w-[70%] bg-white mx-auto">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    aria-label="Log in with Google" className="p-3 flex gap-5">
                    <FcGoogle size={32} className=' bg-white  hover:bg-gray-200 '></FcGoogle>
                    <span className='font-semibold'>Continious with google</span>
                </button>

                {/* <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    aria-label="Log in with GitHub" className="p-3 rounded-full hover:bg-gray-200">
                   <FaGithub size={30} /> 
                </button> */}
            </div>



        </>
    );
};

export default SocialLogin;
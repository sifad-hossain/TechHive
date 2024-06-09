import { useContext, useState } from "react";
import { AuthContext } from "../../../components/authProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";



const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [showPassword, setShowPassword] = useState(false)
    //navigation systems
    const navigate = useNavigate()
    const location = useLocation()
    // const from = location?.state


    //navigate after login
   


    const onSubmit = data => {
        // console.log(data);
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(location?.state ? location.state : '/')
                }

            });
    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white    mx-auto pt-32">
            <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1>
            {/* Input fields and the form started */}
            <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-6">

                <div className="space-y-2 text-sm">
                    <label htmlFor="email" className="block ">
                        email
                    </label>
                    <input
                     type="text"
                      name="email"
                       placeholder="email" 
                       className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring "
                        {...register("email", { required: true })}
                    />
                    {errors.email && toast('plz valid your email')}
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block ">
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring "
                        {...register("password", { required: true })}
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash className="mx-[360px] -mt-8"></FaEyeSlash> : <FaEye className="mx-[360px] -mt-8"></FaEye>
                       }

                    </span>

                    {errors.password && toast('wow so easy')}
                   
                </div>
                {/* Sign in Button */}
                <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                    Log In
                  
                </button>
            </form>
            <SocialLogin></SocialLogin>
            <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                Don&apos;t have an account?
                <Link to='/signUp' href="#" className="underline hover:text-indigo-600">
                    register
                </Link>
            </p>
        </div>
    );
};
export default Login;
import { useContext, useState } from "react";
import Container from "../../shared/container/Container";
import { AuthContext } from "../../../components/authProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAxiosPublic from "../../../hooks/useAxiosPublic";



const SignUp = () => {
    const axiosPublic = useAxiosPublic()

    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    //navigation systems
    const navigate = useNavigate()


    const onSubmit = data => {

        const { email, password, photoURL, fullName } = data;
        setRegisterError('')
        console.log(photoURL);

        if (password.length < 6) {
            toast('password should be at least 6 characters or longer')
            return;
        }
        // else if (!/[a-z] && [A-Z]/.test(password) ) {
        else if (!/[A-Z]/.test(password)) {
            toast('your password should have at least one uppercase  charaters')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast('your password should have at least one lowercase charaters')
            return;
        }


        //Create user and update profile
        createUser(email, password)
            .then(result => {
                updateUserProfile(fullName, photoURL)
                    .then(() => {

                        //Create User entry in the database
                        const userInfo = {
                            name: fullName,
                            email: email
                            // admin passwor: asdf12!A
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    // reset()
                                    toast('user creadted succesfully')
                                    navigate('/')
                                    console.log(result.user);
                                }
                            })

                    })
            })
            .catch(() => {
                // setRegisterError(error.message)
                toast('please right your email')
            })
    }

    return (
        <>
            <Container>
                <div
                    style={{ 'background-image': 'url()' }}
                    className="w-full max-w-lg p-7 space-y-1 rounded-xl border bg-white    mx-auto ">
                    <h1 className="text-3xl font-bold text-center mb-5 text-gray-700">Sign Up on TechHive</h1>
                    <p className="text-slate-700 font-semibold text-lg">Join our community of friendly folks discovering and sharing the latest products in tech</p>
                    {/* Input fields and the form started */}
                    <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-5">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block ">
                                Your name
                            </label>

                            <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                                {...register("fullName", { required: true })}
                            />

                            {errors.fullName && toast('wow so easy')}
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="photoURL" className="block ">
                                photoURL
                            </label>

                            <input type="text" name="photoURL" placeholder="photoURL" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring "
                                {...register("photoURL")}
                            />

                            {errors.photoURL && toast('wow so easy')}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block ">
                                email
                            </label>

                            <input type="text" name="email" placeholder="email" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                                {...register("email", { required: true })}
                            />

                            {errors.email && toast('plz your email')}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block ">
                                Password
                            </label>

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                                {...register("password", { required: true })}

                            />

                            <span onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash size={25} className="mx-[360px] -mt-8"></FaEyeSlash> : <FaEye 
                                    size={25} className="mx-[360px] -mt-8"></FaEye>
                                }

                            </span>
                            {errors.password && toast('plz your password')}



                        </div>
                        {/* Sign in Button */}
                        <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                            Register
                        </button>
                    </form>

                    {
                        registerError && <p className="text-red-600">{registerError}</p>
                    }
                    <SocialLogin></SocialLogin>
                    <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                        Already have an account?
                        <Link to='/login' href="#" className="underline hover:text-indigo-600">
                            login
                        </Link>
                    </p>
                </div>
            </Container>
        </>
    );
};

export default SignUp;
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../hook/AuthProvider";
import SocialLogin from "../../hook/SocialLogin";
import toast from "react-hot-toast";


const Login = () => {
     const { userSignIn } = useContext(AuthContext);
     const [error, setError] = useState('');
     const location = useLocation();
     const navigate = useNavigate()



     const handelLogin = (e) => {
          e.preventDefault();

          const email = e.target.email.value;
          const password = e.target.password.value;
          //user sign In Email And Password
          userSignIn(email, password)
               .then(() => {
                    toast.success(' Login Successfully')

                    // after login
                    navigate(location?.state ? location.state : "/")

               })
               .catch(error => {
                    setError(error.message)
               })



     }

     return (

          <div >
               <div className=" flex  justify-center items-center h-svh ">
                    <form onSubmit={handelLogin} className="bg-slate-800 p-16 rounded-xl">
                         <p className="mb-1 px-2">Your Email</p>
                         <input
                              className="px-4 py-2 w-full  rounded-lg mb-5"
                              placeholder="Email"
                              type="email"
                              name="email"

                              required
                         />
                         <p className="mb-1 px-2">Your Password</p>
                         <input
                              className="px-4 py-2 w-full rounded-lg"
                              placeholder="password"
                              type="password"
                              name="password"

                              required
                         />
                         <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                         </label>
                         <div className="mt-6 ">
                              <button className="w-full btn btn-warning font-semibold">Login</button>
                         </div>
                         <div className="flex justify-between mt-3">
                              <p>New here ?</p>
                              <Link className="font-bold  hover:underline hover:text-blue-500" to={"/register"}>Create an account</Link>
                         </div>
                         <p className="text-sm w-96 mt-4 text-red-500">{error}</p>
                         <SocialLogin></SocialLogin>
                    </form>

               </div>

          </div>
     );
};

export default Login;
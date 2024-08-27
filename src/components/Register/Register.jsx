
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hook/AuthProvider";
import toast from "react-hot-toast";



const Register = () => {
     const { userRegister } = useContext(AuthContext);
     const [error, setError] = useState('');

     const handelRegister = (e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const password = e.target.password.value;

          if (!/(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/.test(password)) {
               setError('Minimum eight characters, at least one uppercase letter,  one number and one special ')

          }
          else {
               userRegister(email, password)
                    .then(result => {
                         console.log(result.user);
                         toast.success(' Login Successfully');

                    })
                    .catch(error => {
                         setError(error.message);
                    })
          }

     }

     return (


          <div >
               <div className=" flex justify-center items-center h-svh ">
                    <form onSubmit={handelRegister} className="bg-slate-800 p-14 rounded-xl">

                         <p className="mb-1 px-2">Your Name</p>
                         <input
                              className="px-4 py-2 w-80 rounded-lg mb-5"
                              placeholder="Name"
                              type="text"
                              name="name"

                              required
                         />
                         <p className="mb-1 px-2">Your Email</p>
                         <input
                              className="px-4 py-2 w-80 rounded-lg mb-5"
                              placeholder="Email"
                              type="email"
                              name="email"

                              required
                         />
                         <p className="mb-1 px-2">Your Password</p>
                         <input
                              className="px-4 py-2 w-80 rounded-lg"
                              placeholder="password"
                              type="password"
                              name="password"

                              required
                         />
                         <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                         </label>
                         <div className="mt-6 ">
                              <button className="w-full btn btn-warning font-semibold">Register</button>
                         </div>
                         <div className="flex justify-between mt-3">
                              <p>Have An Account ?</p>
                              <Link className="font-bold  hover:underline hover:text-blue-500" to={"/Login"}>Please Login</Link>
                         </div>

                         <p className="text-sm w-96 mt-4 text-red-500">{error}</p>


                    </form>
               </div>

          </div>
     );
};

export default Register;
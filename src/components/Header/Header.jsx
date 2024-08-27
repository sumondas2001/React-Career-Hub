import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../hook/AuthProvider";


const Header = () => {
     const { user, logOut } = useContext(AuthContext);



     const Links = <>
          <li><NavLink to={'/'}><a >Home</a></NavLink></li>
          <li> <NavLink to={'/applied'}><a >Applied Jobs</a></NavLink></li>
          <li> <NavLink to={'/statistics'}><a >Statistics</a></NavLink></li>
          <li> <NavLink to={'/jobs'}><a >Jobs</a></NavLink></li>
          <li> <NavLink to={'/blogs'}><a >Blogs</a></NavLink></li>

     </>
     return (
          <div className="navbar bg-slate-900 px-10">

               <div className="navbar-start ">
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                         </div>
                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              {Links}

                         </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">CareerHub</a>
               </div>
               <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                         {Links}
                    </ul>
               </div>
               <div className="navbar-end ">


                    {
                         user ?
                              <div className="flex gap-10 items-center">
                                   <p className="text-lg font-bold">{user.email}</p>
                                   <button onClick={logOut} className="btn btn-warning font-bold">
                                        LogOut
                                   </button>
                              </div>
                              :
                              <button className="btn btn-success font-bold">
                                   <Link to={"/login"}>Login</Link>
                              </button>

                    }

               </div>

          </div >
     );
};

export default Header;
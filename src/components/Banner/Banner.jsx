import { Link } from "react-router-dom";


const Banner = () => {
     return (
          <div className="lg:flex md:flex mt-10  mb-28 items-center px-10 mx-16 gap-6">
               <div>
                    <h1 className="text-7xl font-extrabold ">One Step Closer To Your <br /> <span className="text-red-500">Dream Job</span></h1>
                    <p className="font-medium text-lg my-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link><button className="text-xl font-bold btn btn-accent text-white">Get Started</button></Link>
               </div>
               <div>
                    <img src={'../../../public/assets/images/user.png'} alt="" />
               </div>
          </div>
     );
};

export default Banner;
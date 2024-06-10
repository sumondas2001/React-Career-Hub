import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";



const FeaturedJob = ({ job }) => {
     const { logo, job_title, company_name, job_type, location, salary, remote_or_onsite, id } = job;
     // console.log(job)
     return (
          <div className="my-4 hover:bg-slate-950 px-16 mx-16 py-8 hover:rounded-xl" >
               <div className="text-white ">
                    <img src={logo} alt="" />
                    <h3 className="text-2xl font-bold my-4">{job_title}</h3>
                    <h5 className="text-xl my-4 font-semibold">{company_name}</h5>
               </div>
               <div className="flex gap-8 my-4">
                    <Link><button className="border border-green-300 font-bold text-green-500 p-2 rounded-lg">{job_type}</button></Link>
                    <Link> <button className="border border-green-300 font-bold text-green-500 p-2 rounded-lg">{remote_or_onsite}</button></Link>
               </div>
               <div className="flex  text-white items-center">
                    <FaLocationDot />
                    <p className="pr-10 pl-2" >{location}</p>
                    <PiCurrencyCircleDollarFill />
                    <p className="pl-2">Salary: {salary}</p>
               </div>
               <div className=" text-center my-8 ">
                    <Link to={`/job/${id}`}>
                         <button className="btn btn-primary text-white text-xl font-bold ">View Details</button>
                    </Link>
               </div>
          </div >
     );
};

export default FeaturedJob;
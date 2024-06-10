import { Link } from "react-router-dom";


const AppliedJobsAll = ({ job }) => {
     const { logo, job_title, company_name, job_type, location, salary, remote_or_onsite, id } = job;
     // console.log(job)
     return (
          <div className=" flex justify-around items-center mb-12" >
               <div className="flex items-center mx-10 px-10 gap-10 ">
                    <div>
                         <img className="w-32" src={logo} alt="" />
                    </div>
                    <div className="px-10 mx-10 ">
                         <h1 className="text-xl font-bold mb-3">{job_title}</h1>
                         <h3 className="text-lg font-semibold mb-3">{company_name}</h3>
                         <div className="flex gap-4 mb-3">
                              <p className="border border-yellow-300 p-1 rounded-md text-sm font-normal ">{job_type}</p>
                              <p className="border border-yellow-300 p-1 rounded-md text-sm font-normal">{remote_or_onsite}</p>
                         </div>
                         <div className="flex gap-4">
                              <p className="text-base font-medium"> Location: {location}</p>
                              <p className="text-base font-medium">Salary:  {salary}</p>
                         </div>
                    </div>
               </div>
               <div>
                    <Link to={`/job/${id}`}>
                         <button className="btn btn-primary text-base font-medium ">View Details</button>
                    </Link>
               </div>


          </div>
     );
};

export default AppliedJobsAll;
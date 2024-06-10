import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/LocalStoage";
import AppliedJobsAll from "../AppliedJobsAll/AppliedJobsAll";


const AppliedJobs = () => {
     const [appliedJobs, setAppliedJobs] = useState([]);
     const [displayJobs, setDisplayJobs] = useState([]);
     const handleJobsFilter = filter => {
          if (filter === 'all') {
               setDisplayJobs(appliedJobs)
          }
          else if (filter === 'remote') {
               const remotJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
               setDisplayJobs(remotJobs);
          }
          else if (filter === 'onsite') {
               const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
               setDisplayJobs(onSiteJobs);
          }
     }

     const jobs = useLoaderData();
     useEffect(() => {
          const storedJobsId = getStoredJobApplication();
          if (jobs.length > 0) {
               // const jobsApplied = [];
               // for (const id of storedJobsId) {
               //      const job = jobs.find(job => job.id === id);
               //      if (job) {
               //           jobsApplied.push(job)
               //      }
               // }
               const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id));



               setAppliedJobs(jobsApplied);
               setDisplayJobs(jobsApplied);
          }
     }, [jobs]);
     return (
          <div>
               <div className="flex items-center mb-10 gap-56">
                    <img className="pt-4 opacity-40 " src={'../../../public/assets/images/bg1.png'} alt="" />
                    <h1 className="text-2xl font-extrabold text-center ">Applied Jobs</h1>

               </div>
               <div className="text-right px-52">

                    <details className="dropdown">
                         <summary className="m-1 border p-3 rounded-lg">Filter By</summary>
                         <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                              <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                              <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                              <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                         </ul>
                    </details>
               </div>
               {
                    displayJobs.map(job => <AppliedJobsAll job={job} key={job.id}></AppliedJobsAll>)
               }
          </div>
     );
};

export default AppliedJobs;
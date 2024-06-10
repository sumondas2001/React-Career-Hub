import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { Link } from "react-router-dom";





const FeaturedJobs = () => {
     const [featuredJobs, setFeaturedJobs] = useState([]);
     useEffect(() => {
          fetch('jobs.json')
               .then(res => res.json())
               .then(data => setFeaturedJobs(data))
     }, []);
     const [dataLength, setDataLength] = useState(4)
     return (
          <div className=" my-16 bg-slate-950-950 py-10 ">
               <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                         <h1 className="font-extrabold mb-5 text-5xl">Featured Jobs</h1>
                         <p className="text-xs font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div>
                         <div className="grid grid-cols-2 gap-7 mt-10">
                              {
                                   featuredJobs.slice(0, dataLength).map(job => <FeaturedJob job={job} key={job.id}></FeaturedJob>)
                              }
                         </div>
                    </div>
               </div>
               <div className={dataLength === featuredJobs.length ? "hidden" : 'text-center'}>

                    <button onClick={() => setDataLength(featuredJobs.length)} className="text-lg font-bold btn btn-primary text-white">See All Jobs</button>

               </div>
          </div >
     );
};

export default FeaturedJobs;
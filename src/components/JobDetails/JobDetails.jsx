import { MdOutlineSubtitles } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/LocalStoage";


const JobDetails = () => {
     const jobs = useLoaderData()

     const { id } = useParams();
     const idInt = parseInt(id);

     const jobDetail = jobs.find(job => job.id === idInt);


     const { job_description, job_responsibility, educational_requirements, experiences, job_title, salary, contact_information } = jobDetail;
     // console.log(job_description)
     const handelToast = () => {
          saveJobApplication(idInt)
          toast('Applied Successful')
     }


     return (

          <div className="mx-10 my-10 ">
               <div className="flex items-center mb-10 gap-56">
                    <img className="pt-4 opacity-40 " src={'../../../public/assets/images/bg1.png'} alt="" />
                    <h1 className="text-2xl font-extrabold text-center ">Job Details</h1>
               </div>

               <div className="md:grid grid-cols-4 gap-5 ">
                    <div className="md:col-span-3  px-6 rounded-lg">
                         <p className="text-lg font-bold my-4">Job Description: <span className="text-sm font-medium">{job_description}</span></p>
                         <p className="text-lg font-bold">Job Responsibility: <span className="text-sm font-medium">{job_responsibility}</span></p>
                         <h5 className="text-lg font-bold my-2 mt-4">Educational Requirements:</h5>
                         <p className="text-sm font-medium">{educational_requirements}</p>
                         <h5 className="text-lg font-bold my-2 mt-4">Experiences:</h5>
                         <p className="text-sm font-medium mb-10">{experiences}</p>
                    </div>
                    <div className="md:col-span-1  px-4 rounded-lg">
                         <h1 className="text-xl font-bold text-center mt-3">Job Details</h1><hr />
                         <div className="mt-4 flex items-center gap-2">
                              <PiCurrencyCircleDollarFill className="text-xl text-red-500" />
                              <h4 className="text-xl font-bold ">Salary : <span className="text-lg font-medium">{salary}</span></h4>
                         </div>
                         <div className="mt-4 flex gap-2">
                              <MdOutlineSubtitles className="text-2xl text-red-500 " ></MdOutlineSubtitles>

                              <h4 className="text-xl font-bold  ">Job Title : <span className="text-lg font-medium">{job_title}</span></h4>
                         </div>
                         <h1 className="text-xl font-extrabold text-center mt-2">Contact Information</h1><hr />
                         <div className="flex items-center gap-2 mt-2">
                              <LuPhone className="text-xl text-red-500 " ></LuPhone>
                              <p className="text-xl font-bold  ">Phone: <span className="text-lg font-medium">{contact_information.phone}</span></p>
                         </div>
                         <div className="flex  gap-2 mt-2 items-center">

                              <MdAttachEmail className="text-xl text-red-500 " />
                              <p className="text-xl font-bold  ">Email : <span className="text-lg font-medium">{contact_information.email}</span></p>
                         </div>
                         <div className="flex  gap-2 mt-2 ">

                              <GrMapLocation className="text-2xl text-red-500 " />
                              <p className="text-lg font-bold  ">Address : <span className="text-sm font-medium">{contact_information.address}</span></p>
                         </div>
                         <Link>
                              <button onClick={handelToast} className="text-xl font-bold btn btn-primary w-full my-10 text-white">Apply Now</button>
                         </Link>
                    </div>
               </div>
               <ToastContainer />
          </div>
     );
};

export default JobDetails;
import { useEffect, useState } from "react";
import CategoryJobsList from "../CategoryJobsList/CategoryJobsList";


const CategoryList = () => {
     const [categoryJobs, setCategoryJobs] = useState([]);
     useEffect(() => {
          fetch('categories.json')
               .then(res => res.json())
               .then(data => setCategoryJobs(data))
     }, [])
     return (
          <div className="bg-slate-900 py-8 text-white">
               <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                         <h2 className="text-4xl font-extrabold mb-6">Job Category List</h2>
                         <p className="text-base font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className="flex gap-16 justify-center">
                         {
                              categoryJobs.map(list => <CategoryJobsList list={list} key={list.id}></CategoryJobsList>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default CategoryList;
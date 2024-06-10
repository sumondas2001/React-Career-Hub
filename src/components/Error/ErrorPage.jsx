import { Link } from "react-router-dom";


const ErrorPage = () => {
     return (
          <div className="flex justify-center items-center h-screen">
               <div className="text-center ">
                    <h1 className="text-2xl text-red-500">Oppes !!!!!</h1>
                    <Link to="/">
                         <button className="btn text-lg font-medium btn-primary mt-8">Go To Back Home</button>
                    </Link>
               </div>
          </div>
     );
};

export default ErrorPage;
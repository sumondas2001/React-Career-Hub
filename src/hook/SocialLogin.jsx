import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";


const SocialLogin = () => {
     const { googleLogin } = useContext(AuthContext);

     const handelGoogle = () => {
          // create User Email And Password
          googleLogin()
               .then(result => {
                    console.log(result.user);
                    toast.success(' Login Successfully')
               })

     }
     return (
          <div className="text-center mt-6">
               <button onClick={handelGoogle} className="btn font-medium btn-accent  ">Google</button>
          </div>
     );
};

export default SocialLogin;
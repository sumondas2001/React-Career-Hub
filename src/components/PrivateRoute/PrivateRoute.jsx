import { useContext } from "react";
import { AuthContext } from "../../hook/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
     const location = useLocation();
     // console.log(location)
     const { user, loading } = useContext(AuthContext);
     if (loading) {

          return <div className="flex h-svh items-center justify-center">
               <span className="size-10 loading loading-spinner text-warning"></span>
          </div>

     }
     if (user) {
          return children
     }
     return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {

     children: PropTypes.node,

}
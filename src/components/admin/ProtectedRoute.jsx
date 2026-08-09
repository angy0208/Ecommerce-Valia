import { Navigate } from "react-router-dom";


function ProtectedRoute({ children }) {


    const access = localStorage.getItem("admin");


    if (!access) {

        return <Navigate to="/admin-login" replace/>;

    }


    return children;


}


export default ProtectedRoute;
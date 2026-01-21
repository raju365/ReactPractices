import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const AuthWrapper = (props) => {

    const { currentUser } = useSelector((state)=> state.userReducer);
  return currentUser ? props.children : <Navigate to="/login" />;
}

export default AuthWrapper
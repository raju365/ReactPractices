import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UnAuthWrapper = (props) => {
  const { currentUser } = useSelector((state) => state.userReducer);
  return !currentUser ? props.children : <Navigate to="/" />;
};

export default UnAuthWrapper;

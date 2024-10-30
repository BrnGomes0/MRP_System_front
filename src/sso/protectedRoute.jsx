import PropTypes from 'prop-types';
import { useMsal } from "@azure/msal-react";
import { Navigate } from "react-router-dom";
 
const ProtectedRoute = ({ children }) => {
  const { accounts } = useMsal();
 
  if (!accounts[0]) {
    return <Navigate to="/login" />;
  }
 
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};
export default ProtectedRoute;
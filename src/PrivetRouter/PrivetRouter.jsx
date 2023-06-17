import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <progress className="progress w-72"></progress>
      </>
    );
  }
  const location = useLocation();

  if (user) {
    return children;
  }
  return (
    <Navigate to={"/login"} state={{ form: location }} replace>
      {" "}
    </Navigate>
  );
};

export default PrivetRouter;

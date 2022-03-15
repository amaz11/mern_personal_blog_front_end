import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="Homecontainer">
        <div className="m-5 text-center">
          <h3>404 Fot Found</h3>
          <Link className="btn btn-success" to="/">
            Go To Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

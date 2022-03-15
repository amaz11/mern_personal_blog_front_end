import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(userContext);
  const history = useNavigate();
  const logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      //   const data = await res.json()
      dispatch({ type: "USER", payload: false });
      history("/login");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    logout();
  }, []);
  return <></>;
};

export default Logout;

import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [userData, setuserData] = useState({});
  const homePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setuserData({ ...userData, name: data.name });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    homePage();
  }, []);
  return (
    <>
      <div className="">
        <div className="Homecontainer">
          <div className="m-5 text-center">
            {userData.name ? <h3>{userData.name}</h3> : <h3>Welcome</h3>}
            {userData.name ? (
              <h1>I Am a Mern Developer</h1>
            ) : (
              <h1>We are the Mern Developer</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

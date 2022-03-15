import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";
const About = () => {
  const [userData, setUserData] = useState({});
  const history = useNavigate();
  const aboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history("/login");
    }
  };
  useEffect(() => {
    aboutPage();
  }, []);
  return (
    <>
      <div className="container shadow emp-profile">
        <form method="GET">
          <div className="row row-box">
            <div className="col-md-4 profile-pic">
              <img
                src="https://i.pinimg.com/550x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.profession}</h6>
                <p className="mt-3 mb-5">Rating: 1/10</p>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Timeline
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="btn btn-secondary"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row row-box">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>
                <a href="https://github.com/amaz11" target="_blank">
                  Github
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100008252167117"
                  target="_blank"
                >
                  Facebook
                </a>
                <a href="https://www.instagram.com/k_m_amaz/" target="_blank">
                  Instragram
                </a>
                <a href="https://github.com/amaz11" target="_blank">
                  Linkned
                </a>
              </div>
            </div>
            <div className="col-md-8 about-info">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">{userData._id}</div>
                  </div>
                  <div className="mt-3 row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">{userData.name}</div>
                  </div>
                  <div className="mt-3 row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">{userData.email}</div>
                  </div>
                  <div className="mt-3 row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">{userData.mobile}</div>
                  </div>
                  <div className="mt-3 row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">{userData.profession}</div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>U</label>
                    </div>
                    <div className="col-md-6">sdlfjalsdksl</div>
                  </div>
                  <div className="mt-3 row">
                    <div className="col-md-6">
                      <label>Ndfasdfs</label>
                    </div>
                    <div className="col-md-6">Nfasds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;

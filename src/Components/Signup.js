/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    profession: "",
    password: "",
    conpassword: "",
  });
  const handInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const allInput = setUser({ ...user, [name]: value });
    // console.log(allInput);
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, mobile, profession, password, conpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        profession,
        password,
        conpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Fill the Form Please 🥰🥰☺");
      console.log("Not Fill");
    } else {
      window.alert("Registretion Successfull 🥰🥰☺");
      console.log("Successfull");
      history("/login");
    }
  };
  return (
    <div>
      <section className="vh-100">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card shadow text-black"
                style={{ borderRadius: 25 }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4" method="POST">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              value={user.name}
                              onChange={handInput}
                              className="form-control"
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              value={user.email}
                              onChange={handInput}
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-phone fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              name="mobile"
                              value={user.phone}
                              onChange={handInput}
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Phone Number
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-user-tie fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="profession"
                              type="text"
                              value={user.work}
                              onChange={handInput}
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Profession
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              value={user.password}
                              onChange={handInput}
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="conpassword"
                              value={user.cpassword}
                              onChange={handInput}
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            onClick={PostData}
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <span>
                          I already have an account{" "}
                          <NavLink to="/login">Login</NavLink>
                        </span>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

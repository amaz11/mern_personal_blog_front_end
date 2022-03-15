import React, { useEffect, useState } from "react";
import "./contact.css";
const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const aboutPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        mobile: data.mobile,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    aboutPage();
  }, []);

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const sendDataBackeEnd = async (e) => {
    e.preventDefault();
    const { name, email, mobile, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        message,
      }),
    });

    const data = await res.json();

    if (!data) {
      window.alert("Message Not Send 😥");
      // console.log("Not Fill");
    } else {
      window.alert("Message Send 🥰");
      // console.log("Successfull");
      setUserData({ ...userData, message: "" });
    }
  };
  return (
    <div>
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form method="POST">
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handelInput}
                  className="form-control"
                  placeholder="Your Name *"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handelInput}
                  className="form-control"
                  placeholder="Your Email *"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  name="mobile"
                  value={userData.mobile}
                  onChange={handelInput}
                  className="form-control"
                  placeholder="Your Phone Number *"
                />
              </div>
              <br />
              <div className="form-group">
                <textarea
                  name="message"
                  value={userData.message}
                  onChange={handelInput}
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: 150 }}
                  defaultValue={""}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  onClick={sendDataBackeEnd}
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  defaultValue="Send Message"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

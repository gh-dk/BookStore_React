import React, { useState } from "react";

function Login() {
  const [formType, setformType] = useState("signup");

  if (formType === "signup")
    return (
      <div className="signup login">
        <div className="card">
          <form>
            <h1>Signup</h1>
            <p>
              Thank you for choosing our website, and we look forward to serving
              you
            </p>

            <br />

            <br />
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="name" />
            {/* <div className="error">Name is required.</div> */}

            <br />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" />
            {/* <div>
              <div className="error">Email is required.</div>
              <div className="error">Please enter a valid email address.</div>
            </div> */}
            <br />
            <label htmlFor="age">Age</label>
            <input id="age" type="number" placeholder="Age" />
            {/* <div>
              <div className="error">Age is required.</div>
              <div className="error">Age must be a positive number.</div>
            </div> */}
            <br />
            <div>
              <label htmlFor="profilePicture">Profile Picture</label>
              <input id="profilePicture" type="file" />
            </div>

            <br />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" />
            <div
              className="error"
              style={{ color: "red", marginTop: "10px" }}
            ></div>
            <button type="submit">Submit</button>

            <p className="centerMessage">
              Already have an account?
              <span
                onClick={() => {
                  setformType("login");
                }}
                style={{ cursor: "pointer", marginLeft: "5px" }}
              >
                Login
              </span>
            </p>
          </form>
          <div className="img">
            <img
              id="imagesanimation"
              src="https://images.unsplash.com/photo-1468174482686-1047396f13b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  return (
    <>
      <div className="login">
        <div className="card">
          <form action="" id="form">
            <h1>login</h1>
            <p>
              Thank you for choosing our website, and we look forward to serving
              you
            </p>

            <br />
            <label htmlFor="email">email</label>
            <input
              id="email"
              required
              type="email"
              placeholder="email"
              name="email"
            />

            <br />
            <label htmlFor="">password</label>
            <input
              id="password"
              required
              type="password"
              name="password"
              placeholder="password"
            />

            <button>submit</button>
            <p className="centerMessage">
              Don't have an account ?
              <span
                onClick={() => {
                  setformType("signup");
                }}
                style={{ cursor: "pointer", marginLeft: "5px" }}
              >
                Signup
              </span>
            </p>
          </form>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1468174482686-1047396f13b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

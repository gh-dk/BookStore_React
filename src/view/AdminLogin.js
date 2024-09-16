import React, { useRef } from "react";

function AdminLogin() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const authAdmin = () => {
    if (
      usernameRef.current.value === "admin" &&
      passwordRef.current.value === "admin"
    ) {
      alert("Login Successful!");
    } else {
      alert("Invalid credentials!");
    }
  };
  return (
    <>
      <div className="login">
        <div className="card">
          <form id="form" onSubmit={authAdmin}>
            <h1>Admin login</h1>
            <p>
              Thank you for choosing our website, and we look forward to serving
              you
            </p>

            <br />
            <label htmlFor="username">username</label>
            <input
              id="username"
              required
              type="text"
              placeholder="username"
              name="username"
              ref={usernameRef}
            />

            <br />
            <label htmlFor="">password</label>
            <input
              id="password"
              required
              type="password"
              name="password"
              placeholder="password"
              ref={passwordRef}
            />

            <button>submit</button>
          </form>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1723220217596-45d4b51e2804?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;

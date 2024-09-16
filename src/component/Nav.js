import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav" id="nav">
      <span className="logo">book .</span>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="addproduct">Add book</Link>
        </li>
        <section>
          <Link to="login">login</Link>

          <a className="login-btn red">Logout</a>
        </section>
      </ul>
    </div>
  );
}

export default Nav;

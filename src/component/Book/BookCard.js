import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card">
      <div className="img-box">
        <img className="unset" src={book.image} alt="" />
        <img className="first" src={book.image} alt="" />
        <img className="second" src={book.image} alt="" />
      </div>
      <span className="info">
        <h3>{book.title}</h3>
        <p>
          by : <span>{book.author}</span>
        </p>
        <p>
          <span>{book.summary}</span>
        </p>
        <Link to={"../read/" + book._id}>
          <button>read</button>
        </Link>
        <div style={{ display: "none" }}>
          <a className="edit">
            <button>Edit</button>
          </a>
          <a className="delete">
            <button>delete</button>
          </a>
        </div>
      </span>
    </div>
  );
}

export default BookCard;

import React from "react";
import { Link } from "react-router-dom";
import { bufferToImage, deleteBookById } from "../../model/employee.model";

function BookCard({ book, reFetchBooks }) {
  const deleteBook = async (id) => {
    let confirmDeleteAction = window.confirm(
      "Are you sure you want to delete the book with id : " + id + "?"
    );
    if (confirmDeleteAction) {
      const responseData = await deleteBookById(id);
      console.log(responseData);
      await reFetchBooks();
    }
  };
  return (
    <div className="card">
      <div className="img-box">
        <img className="unset" src={bufferToImage(book.image)} alt="" />
        <img className="first" src={bufferToImage(book.image)} alt="" />
        <img className="second" src={bufferToImage(book.image)} alt="" />
      </div>
      <span className="info">
        <h3>{book.title}</h3>
        <p>
          by : <span>{book.author}</span>
        </p>
        <p>
          <span>{book.summary}</span>
        </p>
        <Link to={"../read/" + book.id}>
          <button>read</button>
        </Link>
        <div>
          <Link to={"/editproduct/" + book.id} className="edit">
            <button>Edit</button>
          </Link>
          <button onClick={() => deleteBook(book.id)} className="delete">
            delete
          </button>
        </div>
      </span>
    </div>
  );
}

export default BookCard;

import React from "react";
import { books } from "../../script/Book.object";
import BookCard from "./BookCard";
function Book() {
  return (
    <>
      <div className="container">
        <div className="books" id="store">
          <p>
            <small>Featured books</small>
          </p>
          <div className="line"></div>

          <div className="search">
            <input type="text" placeholder="search book" id="searchbar" />
            <img src="https://img.icons8.com/ios/1x/search.png" alt="" />
          </div>
        </div>

        <div className="box" id="main-box">
          {books.map((book, i) => (
            <BookCard key={i} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Book;

import React, { useState } from "react";
// import { books } from "../../script/Book.object";
import BookCard from "./BookCard";
import { useLoaderData } from "react-router-dom";
import { getAllBooks, getBooksByTitle } from "../../model/employee.model";
function Book() {
  const loadedBooks = useLoaderData();
  const [searchedTerm, setsearchedTerm] = useState("");
  const [books, setBooks] = useState(loadedBooks);

  const reFetchBooks = async () => {
    const responseData = await getAllBooks();
    setBooks(responseData);
  };

  const searchBook = async (event) => {
    setsearchedTerm(event.target.value);
    if (event.target.value.length > 0) {
      const searchedBooks = await getBooksByTitle(event.target.value);
      if (searchedBooks) {
        setBooks(searchedBooks);
      }
      console.log(searchedBooks);
    } else {
      reFetchBooks();
    }
  };

  return (
    <>
      <div className="container">
        <div className="books" id="store">
          <p>
            <small>Featured books</small>
          </p>
          <div className="line"></div>

          <div className="search">
            <input
              value={searchedTerm}
              onChange={searchBook}
              type="text"
              placeholder="search book"
              id="searchbar"
            />
            <img src="https://img.icons8.com/ios/1x/search.png" alt="" />
          </div>
        </div>

        <div className="box" id="main-box">
          {books.map((book, i) => (
            <BookCard reFetchBooks={reFetchBooks} key={i} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Book;

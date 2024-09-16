import React, { useState } from "react";

function ProductForm() {
  const [productFormState, setproductFormState] = useState({
    title: "",
    author: "",
    summary: "",
    image: null,
    pdf: null,
    type: "",
  });

  function updateProductFormState(event) {
    setproductFormState({
      ...productFormState,
      [event.target.id]: event.target.value,
    });
  }

  function updateMedia(event) {
    setproductFormState({
      ...productFormState,
      [event.target.id]: event.target.files[0],
    });
  }

  function submitProduct(event) {
    event.preventDefault();
    console.log(productFormState);
  }

  return (
    <>
      <div className="login productForm">
        <div className="card">
          <form onSubmit={submitProduct}>
          <h1>Product Form</h1>
            <p>
              Add new products 
            </p><br/>
            <label htmlFor="title">Title</label>
            <input onChange={updateProductFormState} id="title" type="text" />
            <br />

            <label htmlFor="author">Author</label>
            <input onChange={updateProductFormState} id="author" type="text" />
            <br />
            <label htmlFor="summary">Summary</label>
            <textarea onChange={updateProductFormState} id="summary"></textarea>
            <br />
            <label htmlFor="image">Select Image</label>
            <input
              onChange={updateMedia}
              id="image"
              accept="image/*"
              type="file"
            />
            <br />
            <label htmlFor="pdf">Book Pdf</label>
            <input
              onChange={updateMedia}
              id="pdf"
              accept="application/pdf"
              type="file"
            />
            <br />
            <label htmlFor="type">Type</label>
            <input onChange={updateProductFormState} id="type" type="text" />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductForm;

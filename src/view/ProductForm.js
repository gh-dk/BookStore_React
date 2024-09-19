import React, { useEffect, useState } from "react";
import { addBook, getBooksById, updateBookById } from "../model/employee.model";
import { useNavigate, useParams } from "react-router-dom";

function ProductForm() {
  const [updateMode, setupdateMode] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const [productFormState, setproductFormState] = useState({
    id: "",
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

  async function submitProduct(event) {
    event.preventDefault();
    const formData = new FormData();
    for (const key in productFormState) {
      if (productFormState[key]) formData.append(key, productFormState[key]);
    }

    if (updateMode) {
      for (const value of formData.values()) {
        console.log(value);
      }

      const responseData = await updateBookById(params.id, formData);
      console.log(responseData);
      navigate("/home");
    } else {
      const responseData = await addBook(formData);
      console.log(responseData);
      navigate("/home");
    }
  }

  useEffect(() => {
    console.log(params);

    async function getDataById(id) {
      const newData = await getBooksById(id);
      setproductFormState({ ...newData[0], image: null, pdf: null });
      console.log(newData[0]);
    }

    if (params.id) {
      setupdateMode(true);
      getDataById(params.id);
    }
  }, [params]);

  return (
    <>
      <div className="login productForm">
        <div className="card">
          <form onSubmit={submitProduct}>
            <h1>Product Form</h1>
            <p>{updateMedia ? "Update" : "Add new"} products</p>

            {updateMode ? (
              <>
                <br />
                <label htmlFor="id">id</label>
                <input
                  onChange={updateProductFormState}
                  id="id"
                  name="id"
                  type="number"
                  readOnly={updateMode}
                  value={productFormState.id}
                />
              </>
            ) : (
              ""
            )}

            <br />
            <label htmlFor="title">Title</label>
            <input
              onChange={updateProductFormState}
              value={productFormState.title}
              id="title"
              type="text"
            />
            <br />

            <label htmlFor="author">Author</label>
            <input
              onChange={updateProductFormState}
              value={productFormState.author}
              id="author"
              type="text"
            />
            <br />
            <label htmlFor="summary">Summary</label>
            <textarea
              onChange={updateProductFormState}
              value={productFormState.summary}
              id="summary"
            ></textarea>
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
            <input
              onChange={updateProductFormState}
              value={productFormState.type}
              id="type"
              type="text"
            />

            <button type="submit">{!updateMode ? "Submit" : "Update"}</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductForm;

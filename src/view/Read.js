import React from "react";
import { useLoaderData } from "react-router-dom";
import { bufferToImage } from "../model/employee.model";
import PdfViewer from "../component/PdfViewer";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Read() {
  const book = useLoaderData();
  console.log(book);

  return (
    <>
      <div className="view-data" id="view-data">
        <div className="card">
          <div className="one">
            <div className="box">
              <div>
                <img
                  id="poster-element"
                  alt=""
                  src={bufferToImage(book.image)}
                />
                <div>
                  <small>
                    <i id="author-element">{book.author}</i>
                  </small>
                </div>
              </div>

              <div>
                <h1 id="title-element">{book.title}</h1>
                <div className="two">
                  <span id="type-element">{book.type}</span>
                </div>

                <div className="two">
                  <span id="summary-element">{book.summary}</span>
                </div>
              </div>
            </div>
          </div>

          <PdfViewer url={book.pdf} />
          <div id="buttons-element"></div>
        </div>
      </div>
    </>
  );
}

export default Read;

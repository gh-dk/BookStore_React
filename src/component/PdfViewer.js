import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfViewer({ url }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Document
        file={"http://localhost:3001/" + url}
        onLoadSuccess={onDocumentLoadSuccess}
        style={{ width: "100%" }}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={`page_${index + 1}`} style={{ marginBottom: "10px" }}>
            <Page pageNumber={index + 1} />
          </div>
        ))}
      </Document>
      <p>Showing {numPages} pages</p>
    </div>
  );
}

export default PdfViewer;

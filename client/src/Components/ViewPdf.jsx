import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ViewPdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleClick() {
    window.open("https://example.com/path/to/file.pdf");
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className="p-4 bg-gray-200 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        Click here to view the file
      </div>
      <div className="mt-4">
        <Document
          file="https://example.com/path/to/file.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default ViewPdf;

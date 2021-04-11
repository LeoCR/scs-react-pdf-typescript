import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import axios from "axios";
import "./PdfViewer.css";
import credentials from "./credentials.json";
import Arrow from "./arrow.svg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  useEffect(() => {
    axios
      .post("http://localhost:41230/login", {
        username: credentials.username,
        password: credentials.password,
      })
      .then((res) => {
        console.log(res);
        if (res && res.data && res.data.token) {
          axios
            .get("http://localhost:41230/informe-de-labores", {
              headers: { Authorization: "Bearer " + res.data.token },
              responseType: "blob",
            })
            .then((resp) => {
              if (resp) {
                const newPdfFile = new Blob([resp.data]);
                setPdfFile(newPdfFile);
                console.log(newPdfFile);
              }
            });
        }
      });
  }, []);
  return (
    <div>
      <div className="controls">
        <button
          onClick={prevPage}
          disabled={pageNumber === 1}
          className="lg-prev"
        >
          <Arrow style={{ maxWidth: "30px", height: "15px" }} />
        </button>
        <button
          onClick={nextPage}
          disabled={pageNumber === numPages}
          className="lg-next"
        >
          <Arrow style={{ maxWidth: "30px", height: "15px" }} />
        </button>
      </div>
      {pdfFile ? (
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          onContextMenu={(e) => e.preventDefault()}
          className="pdf-container"
        >
          <Page pageNumber={pageNumber} />
        </Document>
      ) : (
        "Cargando Informe"
      )}
    </div>
  );
};
export default PdfViewer;

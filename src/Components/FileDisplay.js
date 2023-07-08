import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Document, Page } from 'react-pdf';

const FileDisplay = () => {
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    // Fetch the PDF file from the server
    fetch('//localhost:8000/file')
      .then((response) => response.blob())
      .then((blob) => {
        // Create a URL for the blob
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      });

    return () => {
      // Clean up the URL when component unmounts
      URL.revokeObjectURL(pdfUrl);
    };
  }, []);

  return (
    <div>
      {pdfUrl ? (
        <embed src={pdfUrl} width="100%" height="500px" type="application/pdf" />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default FileDisplay;

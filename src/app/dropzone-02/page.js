import React from "react";
import "../dropzone-02/style.css";

const Dropzone = () => {
  return (
    <form class="dropzone-box">
      <h2>Upload and attach files</h2>
      <p>Click to upload or drag and drop</p>
      <div class="dropzone-area">
        <div class="file-upload-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-cloud-upload"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
            <path d="M9 15l3 -3l3 3" />
            <path d="M12 12l0 9" />
          </svg>
        </div>
        <input type="file" required id="upload-file" name="uploaded-file" />
        <p class="file-info">No Files Selected</p>
      </div>
      <div class="dropzone-actions">
        <button type="reset">Cancel</button>
        <button id="submit-button" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default Dropzone;

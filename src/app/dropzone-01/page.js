import React from "react";
import "../dropzone-01/style.css";

const Dropzone = () => {
  return (
    <form class="dropzone-box">
      <h2>Upload and attach files</h2>
      <p>Attach files to this project</p>
      <div class="dropzone-area">
        <div class="file-upload-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          </svg>
        </div>
        <p>Click to upload or drag and drop</p>

        <input type="file" required id="upload-file" name="uploaded-file" />
        <p class="message">No Files Selected</p>
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

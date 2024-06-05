import React from "react";
import "../form-controls-01/style.css";

const Formcontrols = () => {
  return (
    <div class="discussion">
      <div class="discussion__header">
        <div class="authed-user"></div>
        <form id="newcomment__form">
          <textarea
            tabindex="1"
            cols="150"
            rows="4"
            minlength="5"
            required
            placeholder="Write a comment"
          ></textarea>
          <div class="newcomment__toolbar">
            <button
              id="reset-button"
              class="button--secondary"
              tabindex="3"
              type="button"
            >
              Reset
            </button>
            <button
              id="confirm-button"
              class="button--primary"
              tabindex="2"
              type="submit"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
      <div class="discussion__comments">{/* will be generated  */}</div>
    </div>
  );
};

export default Formcontrols;

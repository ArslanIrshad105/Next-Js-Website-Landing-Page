import React from "react";
import "../form-controls-01/style.css";

const Formcontrols = () => {
  return (
    <div className="discussion">
      <div className="discussion__header">
        <div className="authed-user"></div>
        <form id="newcomment__form">
          <textarea
            tabindex="1"
            cols="150"
            rows="4"
            minlength="5"
            required
            placeholder="Write a comment"
          ></textarea>
          <div className="newcomment__toolbar">
            <button
              id="reset-button"
              className="button--secondary"
              tabindex="3"
              type="button"
            >
              Reset
            </button>
            <button
              id="confirm-button"
              className="button--primary"
              tabindex="2"
              type="submit"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
      <div className="discussion__comments">{/* will be generated  */}</div>
    </div>
  );
};

export default Formcontrols;

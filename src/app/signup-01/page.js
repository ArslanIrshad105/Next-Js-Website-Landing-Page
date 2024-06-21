import React from "react";
import "../signup-01/style.css";

const Signup = () => {
  return (
    <div className="centering">
      <form className="my-form">
        <div className="signup-welcome-row">
          <img
            className="signup-welcome"
            alt="Logo"
            src="assets/media/signup-01/logo.svg"
          />
          <h1>Sign Up!</h1>
        </div>
        <div className="socials-row">
          <a href="#" title="Signin with Google">
            <img src="assets/media/signup-01/google.png" alt="Google" />
            Signin with Google
          </a>
          <a href="#" title="Signin with Facebook">
            <img src="assets/media/signup-01/facebook.png" alt="Facebook" />
            Signin with Facebook
          </a>
        </div>
        <div className="divider">
          <div className="divider-line"></div>
          OR
          <div className="divider-line"></div>
        </div>
        <div className="my-form__content">
          <div className="text-field">
            <label for="email">Email:</label>
            <input
              aria-label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              autocomplete="off"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A7A2CB"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </div>
          <div className="text-field">
            <label for="password">
              Password:
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Your Password"
                title="Minimum 6 characters at 
                                                            least 1 Alphabet and 1 Number"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
              </svg>
            </label>
          </div>
          <div className="text-field">
            <label for="confirm-password">
              Repeat Password:
              <input
                id="confirm-password"
                type="password"
                name="password"
                placeholder="Repeat Password"
                title="Minimum 6 characters at east 1 Alphabet and 1 Number"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
              </svg>
            </label>
          </div>
          <input type="submit" className="my-form__button" value="Sign-Up" />
        </div>
        <div className="my-form__actions">
          <div>
            By registering you agree to our
            <a href="#" title="Reset Password">
              Terms
            </a>
            and{" "}
            <a href="#" title="Reset Password">
              Privacy
            </a>
          </div>
          <div className="my-form__signin">
            <a href="#" title="Sign In">
              Sign-in
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

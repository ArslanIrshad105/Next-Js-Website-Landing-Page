import React from "react";
import "../signup-02/style.css";

const Signup = () => {
  return (
    <div className="form-wrapper">
      <div className="form-side">
        <a href="#" title="Logo">
          <img
            className="logo"
            src="assets/media/signup-02/logo.png"
            alt="Logo"
          />
        </a>
        <form className="my-form">
          <div className="login-welcome-row">
            <h1>Create your account &#x1F44F;</h1>
          </div>
          <div className="socials-row">
            <a href="#" title="Use Google">
              <img src="assets/media/signup-02/google.png" alt="Google" />
              Sign up with Google
            </a>
            <a href="#" title="Use Apple">
              <img src="assets/media/signup-02/apple.png" alt="Apple" />
              Sign up with Apple
            </a>
          </div>
          <div className="divider">
            <span className="divider-line"></span>
            Or
            <span className="divider-line"></span>
          </div>
          <div className="text-field">
            <label for="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                autocomplete="off"
                placeholder="Your Email"
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
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </svg>
            </label>
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
          <button className="my-form__button" type="submit">
            Sign up
          </button>
          <div className="my-form__actions">
            <div className="my-form__row">
              <span>Did you forget your password?</span>
              <a href="#" title="Reset Password">
                Reset Password
              </a>
            </div>
            <div className="my-form__signup">
              <a href="#" title="Login">
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="info-side">
        <img
          src="assets/media/signup-02/mock.png"
          alt="Mock"
          className="mockup"
        />
        <div className="welcome-message">
          <h2>Navitron Maps! 👋</h2>
          <p>
            Your ultimate guide to navigating the world and discovering new
            places with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

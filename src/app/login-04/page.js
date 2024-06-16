import React from "react";
import "../login-04/style.css";

const Login = () => {
  return (
    <form className="my-form">
      <div className="login-welcome-row">
        <a href="#" title="Logo">
          <img
            src="assets/media/login-04/logo_1.svg"
            alt="Logo"
            className="logo"
          />
        </a>
        <h1>Welcome back &#x1F44F;</h1>
        <p>Please enter your details!</p>
      </div>
      <div className="input__wrapper">
        <input
          type="email"
          id="email"
          name="email"
          className="input__field"
          placeholder="Your Email"
          required
        />
        <label for="email" className="input__label">
          Email
        </label>
        <svg
          className="input__icon"
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
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
        </svg>
      </div>
      <div className="input__wrapper">
        <input
          id="password"
          type="password"
          className="input__field"
          placeholder="Your Password"
          title="Minimum 6 characters at least 1 Alphabet and 1 Number"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          required
        />
        <label for="password" className="input__label">
          Password
        </label>
        <svg
          className="input__icon"
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
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
          <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
        </svg>
      </div>
      <button type="submit" className="my-form__button">
        Login
      </button>
      <div className="socials-row">
        <a href="#" title="Use Google">
          <img src="assets/media/login-04/google.png" alt="Google" />
          Log in with Google
        </a>
      </div>
      <div className="my-form__actions">
        <div className="my-form__row">
          <span>Don't have an account?</span>
          <a href="#" title="Create Account">
            Sign Up
          </a>
        </div>
      </div>
    </form>
  );
};

export default Login;

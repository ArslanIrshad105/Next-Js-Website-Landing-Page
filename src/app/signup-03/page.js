import React from "react";
import "../signup-03/style.css";

const Signup = () => {
  return (
    <div className="form-wrapper">
      <main className="form-side">
        <a href="#" title="Logo">
          <img
            src="assets/media/signup-03/logo.svg"
            alt="Supabase Logo"
            className="logo"
          />
        </a>
        <form className="my-form">
          <div className="form-welcome-row">
            <h1>Get started</h1>
            <h2>Create a new account</h2>
          </div>
          <div className="socials-row">
            <a href="#" title="Continue with Github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github"
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
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              Continue with Github
            </a>
          </div>
          <div className="divider">
            <div className="divider-line"></div>
            or
            <div className="divider-line"></div>
          </div>
          <div className="text-field">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="off"
              placeholder="you@example.com"
              required
            />
            <div className="error-message">Email in incorrect format</div>
          </div>
          <div className="text-field">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Your password"
              title="Minimum 6 characters at least 1 Alphabet and 1 Number"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
              required
            />
            <div className="error-message">
              Minimum 6 characters at least 1 Alphabet and 1 Number
            </div>
          </div>
          <button className="my-form__button" type="submit">
            Sign up
          </button>
          <div className="my-form__actions">
            <div className="my-form__row">
              <span>Have an account?</span>
              <a href="#" title="Reset Password">
                Sign In Now
              </a>
            </div>
          </div>
        </form>
      </main>
      <aside className="info-side">
        <div className="blockquote-wrapper">
          <blockquote>
            Working with Supabase is just fun. It makes working with a DB so
            much easier.
          </blockquote>
          <div className="author">
            <img
              src="assets/media/signup-03/avatar.png"
              alt="Avatar"
              className="avatar"
            />
            <span className="author-name">@avatar</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Signup;

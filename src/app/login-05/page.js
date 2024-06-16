import React from "react";
import "../login-05/style.css";

const Login = () => {
  return (
    <div className="form-wrapper">
      <main className="form-side">
        <a href="#" title="Logo">
          <img
            src="assets/media/login-05/laplace.svg"
            alt="Laplace Logo"
            className="logo"
          />
        </a>
        <form className="my-form">
          <div className="form-welcome-row">
            <h1>Welcome back! &#128079;</h1>
            <h2>Login with your account!</h2>
          </div>
          <div className="socials-row">
            <a href="#" title="Use Apple">
              <img src="assets/media/login-05/apple.png" alt="Apple" />
              Continue with Apple
            </a>
          </div>
          <div className="socials-row">
            <a href="#" title="Use Github">
              <img src="assets/media/login-05/google.png" alt="Google" />
              Continue with Google
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
              title="Minimum 6 characters at 
                                                        least 1 Alphabet and 1 Number"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
              required
            />
            <div className="error-message">
              Minimum 6 characters at least 1 Alphabet and 1 Number
            </div>
          </div>
          <button className="my-form__button" type="submit">
            Sign In
          </button>
          <div className="my-form__actions">
            <div className="my-form__row">
              <span>Don't have an account?</span>
              <a href="#" title="Reset Password">
                Sign Up Now
              </a>
            </div>
          </div>
        </form>
      </main>
      <aside className="info-side">
        <div className="blockquote-wrapper">
          <img
            src="assets/media/login-05/returns.png"
            alt="Returns"
            className="returns"
          />
          <blockquote>
            With Laplace, I have significantly outperformed S&P 500 in the last
            three years.
          </blockquote>
          <div className="author">
            <img
              src="assets/media/login-05/avatar.png"
              alt="Avatar"
              className="avatar"
            />
            <span className="author-name">@ai_trader</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Login;

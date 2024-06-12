import React from "react";
import "../login-07/style.css";

const Login = () => {
  return (
    <div class="form-wrapper">
      <aside class="info-side">
        <div class="blockquote-wrapper">
          <img
            src="assets/media/login-07/returns.png"
            alt="Returns"
            class="returns"
          />
          <blockquote>
            With Laplace, I have significantly outperformed S&P 500 in the last
            three years.
          </blockquote>
          <div class="author">
            <img
              src="assets/media/login-07/avatar.png"
              alt="Avatar"
              class="avatar"
            />
            <span class="author-name">@ai_trader</span>
          </div>
        </div>
      </aside>
      <main class="form-side">
        <a href="#" title="Logo">
          <img
            src="assets/media/login-07/laplace.svg"
            alt="Laplace Logo"
            class="logo"
          />
        </a>
        <form class="my-form">
          <div class="form-welcome-row">
            <h1>Welcome back! &#128079;</h1>
            <h2>Login with your account!</h2>
          </div>
          <div class="socials-row">
            <a href="#" title="Use Apple">
              <img src="assets/media/login-07/apple.png" alt="Apple" />
              Continue with Apple
            </a>
          </div>
          <div class="socials-row">
            <a href="#" title="Use Github">
              <img src="assets/media/login-07/google.png" alt="Google" />
              Continue with Google
            </a>
          </div>
          <div class="divider">
            <div class="divider-line"></div>
            or
            <div class="divider-line"></div>
          </div>
          <div class="text-field">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="off"
              placeholder="you@example.com"
              required
            />
            <div class="error-message">Email in incorrect format</div>
          </div>
          <div class="text-field">
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
            <div class="error-message">
              Minimum 6 characters at least 1 Alphabet and 1 Number
            </div>
          </div>
          <button class="my-form__button" type="submit">
            Sign In
          </button>
          <div class="my-form__actions">
            <div class="my-form__row">
              <span>Don't have an account?</span>
              <a href="#" title="Reset Password">
                Sign Up Now
              </a>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;

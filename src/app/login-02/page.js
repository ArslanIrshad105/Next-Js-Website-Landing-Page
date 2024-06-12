import React from "react";
import "../login-02/style.css";

const Login = () => {
  return (
    <div class="login-wrapper">
      <div class="login-side">
        <a href="#" title="Logo">
          <img class="logo" src="assets/media/login-02/logo.png" alt="Logo" />
        </a>
        <div class="my-form__wrapper">
          <div class="login-welcome-row">
            <h1>Welcome back &#x1F44F;</h1>
            <p>Please enter your details!</p>
          </div>
          <form class="my-form">
            <div class="socials-row">
              <a href="#" title="Use Google">
                <img src="assets/media/login-02/google.png" alt="Google" />
                Log in with Google
              </a>
              <a href="#" title="Use Apple">
                <img src="assets/media/login-02/apple.png" alt="Apple" />
                Log in with Apple
              </a>
            </div>
            <div class="divider">
              <div class="divider-line"></div>
              Or
              <div class="divider-line"></div>
            </div>
            <div class="text-field">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <img
                alt="Email Icon"
                title="Email Icon"
                src="assets/media/login-02/email.svg"
              />
            </div>
            <div class="text-field">
              <label for="password">Password:</label>
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
              <img
                alt="Password Icon"
                title="Password Icon"
                src="assets/media/login-02/password.svg"
              />
            </div>
            <input type="submit" class="my-form__button" value="Login" />
            <div class="my-form__actions">
              <div class="my-form__row">
                <span>Did you forget your password?</span>
                <a href="#" title="Reset Password">
                  Reset Password
                </a>
              </div>
              <div class="my-form__signup">
                <a href="#" title="Create Account">
                  Create Account
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="info-side">
        <div class="welcome-message">
          <h2>Navitron Maps! 👋</h2>
          <p>
            Your ultimate guide to navigating the world and discovering new
            places with ease.
          </p>
        </div>
        <div>
          <img src="assets/media/login-02/mock.png" alt="Mock" class="mockup" />
        </div>
      </div>
    </div>
  );
};

export default Login;

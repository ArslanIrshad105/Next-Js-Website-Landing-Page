import React from "react";
import "../footer-03/style.css";

const Footer = () => {
  return (
    <>
      <section className="subscription-section">
        <div className="subscription-wrapper">
          <div className="subscription__description">
            <h2>Join 10k+ other readers!</h2>
            <p>Stay up to date with our news and articles</p>
          </div>
          <form className="subscribe-form">
            <input type="email" spellcheck="false" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
      <footer>
        <div className="footer-wrapper">
          <div className="social-wrapper">
            <div className="social-links">
              <ul>
                <li>
                  <a href="#" title="Instagram">
                    <img
                      src="assets/media/footer-03/instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" title="Linkedin">
                    <img
                      src="assets/media/footer-03/linkedin.svg"
                      alt="Linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <img
                      src="assets/media/footer-03/twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" title="Youtube">
                    <img
                      src="assets/media/footer-03/youtube.svg"
                      alt="YouTube"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" title="GitHub">
                    <img src="assets/media/footer-03/github.svg" alt="GitHub" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-links">
              <div className="footer-logo">
                <svg
                  width="1103"
                  height="996"
                  viewBox="0 0 1103 996"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z"
                    fill="#FAFBFC"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z"
                    fill="#FAFBFC"
                  />
                </svg>
              </div>
              <section>
                <h3>Product</h3>
                <ul>
                  <li>
                    <a href="#" title="API">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Pricing">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Documentation">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Release Notes">
                      Release Notes
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Status">
                      Status
                    </a>
                  </li>
                </ul>
              </section>
              <section>
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="#" title="Support">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Sitemap">
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Newsletter">
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Help Centre">
                      Help Centre
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Investor">
                      Investor
                    </a>
                  </li>
                </ul>
              </section>
              <section>
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="#" title="About Us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Careers">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Press">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </section>
              <section>
                <h3>Legal</h3>
                <ul>
                  <li>
                    <a href="#" title="Terms and services">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Privacy Policy">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Cookies">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Licenses">
                      Licenses
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Cookies">
                      Contact
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-description">
              <h3>Elevate your tech skills</h3>
              <p>Develop and design platforms with ease</p>
            </div>
            <small>
              © Atheros Intelligence Ltd. <span id="year"></span>, All rights
              reserved
            </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

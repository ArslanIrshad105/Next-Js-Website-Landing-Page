"use client";
import "../Header/Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="menu__wrapper">
      <div className="menu__bar">
        <Link href="/" title="Home" aria-label="home" className="logo">
          <svg
            aria-label="Vercel logotype"
            height="22"
            role="img"
            viewBox="0 0 283 64"
          >
            <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
          </svg>
        </Link>
      </div>
      <div>
        <nav>
          <ul className="navigation hide">
            <li>
              Services
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
              >
                <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
              </svg>
              <div className="dropdown__wrapper">
                <div className="dropdown">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-items-with-description">
                        <li>
                          <svg
                            aria-hidden="true"
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
                            <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                          </svg>
                          <div className="item-title">
                            <h3>Website Design & Development</h3>
                            <p>Zero config, more innovation</p>
                          </div>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-nextjs"
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
                            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                            <path d="M15 12v-3" />
                          </svg>
                          <div className="item-title">
                            <h3>e-Commerce Website Development</h3>
                            <p>The native Next.js platform</p>
                          </div>
                        </li>
                        <li>
                          <svg
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12h4l3 8l4 -16l3 8h4" />
                          </svg>
                          <div className="item-title">
                            <h3>Enterprise App Development</h3>
                            <p>Real-time insights, peak performance</p>
                          </div>
                        </li>
                        <li>
                          <svg
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12h4l3 8l4 -16l3 8h4" />
                          </svg>
                          <div className="item-title">
                            <h3>Mobile App Development</h3>
                            <p>Real-time insights, peak performance</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-items-with-description">
                        <li>
                          <svg
                            aria-hidden="true"
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
                            <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                          </svg>
                          <div className="item-title">
                            <h3>Search Engine Optimization</h3>
                            <p>Zero config, more innovation</p>
                          </div>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-nextjs"
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
                            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                            <path d="M15 12v-3" />
                          </svg>
                          <div className="item-title">
                            <h3>Social Media Marketing</h3>
                            <p>The native Next.js platform</p>
                          </div>
                        </li>
                        <li>
                          <svg
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12h4l3 8l4 -16l3 8h4" />
                          </svg>
                          <div className="item-title">
                            <h3>Search Engine Marketing</h3>
                            <p>Real-time insights, peak performance</p>
                          </div>
                        </li>
                        <li>
                          <svg
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12h4l3 8l4 -16l3 8h4" />
                          </svg>
                          <div className="item-title">
                            <h3>UI/UX Design</h3>
                            <p>Real-time insights, peak performance</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <ul className="list-items-with-description">
                    <li>
                      <svg
                        aria-hidden="true"
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
                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                      </svg>
                      <div className="item-title">
                        <h3>Website Design & Development</h3>
                        <p>Zero config, more innovation</p>
                      </div>
                    </li>
                    <li>
                      <svg
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
                        <path d="M4 12l8 4l8 -4" />
                        <path d="M4 16l8 4l8 -4" />
                      </svg>
                      <div className="item-title">
                        <h3>Infrastructure</h3>
                        <p>Always fast always online</p>
                      </div>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-nextjs"
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
                        <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                        <path d="M15 12v-3" />
                      </svg>
                      <div className="item-title">
                        <h3>Next js</h3>
                        <p>The native Next.js platform</p>
                      </div>
                    </li>
                    <li>
                      <svg
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                      </svg>
                      <div className="item-title">
                        <h3>Edge Functions</h3>
                        <p>Dynamic pages, static speed</p>
                      </div>
                    </li>
                    <li>
                      <svg
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12h4l3 8l4 -16l3 8h4" />
                      </svg>
                      <div className="item-title">
                        <h3>Analytics</h3>
                        <p>Real-time insights, peak performance</p>
                      </div>
                    </li>
                    <li>
                      <svg
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                        <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                        <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                      </svg>
                      <div className="item-title">
                        <h3>Storage</h3>
                        <p>Serverless storage for frontend</p>
                      </div>
                    </li>
                  </ul> */}
                </div>
              </div>
            </li>
            <li>
              <Link href="/about-us" title="Docs">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/portfolio" title="Templates">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blogs" title="Customers">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="action-buttons hide">
        <Link href="#" title="Sign up" className="contact-btn">
          Contact Us
        </Link>
      </div>
      <button aria-label="Open menu" className="burger-menu" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu"
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
          <path d="M4 8l16 0" />
          <path d="M4 16l16 0" />
        </svg>
      </button>
    </header>
  );
};

export default Header;

import PropTypes from "prop-types";
import React from "react";
import {motion} from "framer-motion";

import Header from "../components/header";
import Transition from "../components/transition";

function Layout({ children, location }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-4 mx-auto md:px-4 md:py-8">
        <Transition location={location}>{children}</Transition>
      </main>

      <footer className="footer-pattern">
        <nav className="flex justify-between items-center text-center max-w-4xl p-1 mx-auto text-xs tracking-tight leading-tight md:leading-normal md:text-sm md:tracking-normal md:p-3 text-green-200 bg-blue-700 rounded-lg my-1 md:my-2 bg-opacity-85">
          <p className="text-white flex-1 text-xs sm:leading-loose">
            Created by volunteers
          </p>
          <p className="flex-1 text-center">
            <a
              href="https://www.sagesheffield.org.uk/"
              rel="noreferrer"
              target="_blank"
              className="flex justify-center"
            >
              <svg
                className="h-5 w-5 pt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              <span className="leading-loose text-xs md:leading-relaxed">Support Arts Gardening<br/> Education (SAGE)</span>
            </a>
          </p>
          <p className="flex-1 text-center">
            <a
              href="https://www.gca.burngreave.net/"
              rel="noreferrer"
              target="_blank"
              className="flex  justify-center"
            >
              <svg
                className="h-5 w-5 pt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              <span className="leading-loose md:leading-relaxed text-xs">Green City<br/> Action</span>
            </a>
          </p>
          <p className="flex-1 text-center">
            <a
              href="https://growsheffield.com/"
              rel="noreferrer"
              target="_blank"
              className="flex  justify-center"
            >
              <svg
                className="h-5 w-5 pt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              <span className="md:leading-relaxed  text-xs">Grow <br/> Sheffield</span>
            </a>
          </p>
          <p className="text-lg flex-1 leading-relaxed text-center">
            <span role="img" aria-label="Green Heart">
              <motion.svg height={32} width={32} >
<path id="heart-icon" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
  C30,20.335,16,28.261,16,28.261z"/>
    </motion.svg>
            </span>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

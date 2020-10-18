import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import BigLeaf from "../images/bigleaf.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="headerpattern">
      <div className=" bg-teal-700 bg-opacity-90 rounded-xl shadow-md flex flex-wrap items-center justify-between max-w-6xl p-1 mx-auto my-2 md:p-2">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <img src={BigLeaf} alt="" className="mr-2 h-16" />
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } text-center md:block md:items-center w-full md:w-auto mt-3 lg:mt-0`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/about`,
              title: `About Us`,
            },
            {
              route: `/history`,
              title: `History`,
            },
            {
              route: `/location`,
              title: `Location`,
            },
            {
              route: `/downloads`,
              title: `Leaflets`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block w-20 md:w-auto mx-auto md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
              <hr />
            </Link>
          ))}
          <a
            className="block mt-5 mb-2 text-white no-underline md:mb-0 md:inline-block md:mt-0 md:ml-6 md:pr-3"
            href={"https://www.facebook.com/tcvallotment/"}
            rel="noreferrer"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mx-auto fill-current transform translate-y-1"
            >
              <title>Facebook Page</title>
              <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

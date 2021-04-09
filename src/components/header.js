import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import BigLeaf from "../images/bigleaf.png";
import {motion, AnimatePresence} from "framer-motion";
import { logoVariants, leafVariants, menuItemVariants, underlineVariants, menuVariants } from "./headerVariants";

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
    <header className="header_pattern">
      <AnimatePresence>
      <div className="rounded-xl flex flex-wrap items-center justify-center max-w-6xl p-1 mx-auto my-2
                  md:p-2 text-shadow-lg hover:text-shadow-xl">
        <Link to="/">
          <motion.h1 id={"logo"} variants={logoVariants} initial={"initial"} animate={"animate"} whileHover={logoVariants?.whileHover}  className="flex items-center text-white no-underline mb-2">
            <motion.img variants={leafVariants} whileHover={leafVariants.whileHover} src={BigLeaf} alt="" className="mr-2 h-16" />
            <motion.span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </motion.span>
          </motion.h1>
        </Link>

        <button
          className="items-center mx-auto block px-3 py-2 text-white border border-white rounded md:hidden"
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

        <motion.nav layout variants={menuVariants} id={"menu"}  animate={"animate"} initial={"initial"} exit={"exit"}
          className={`${
            isExpanded ? `block` : `hidden`
          } text-center md:block text-shadow-sm  w-full md:w-auto mt-0 lg:mt-1`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/about_us`,
              title: `About Us`,
            },
            {
              route: `/our_history`,
              title: `History`,
            },
            {
              route: `/what_we_do`,
              title: "What We Do"
            },
            {
              route: `/gardening_sessions_and_activities`,
              title: `Gardening & Activities`,
            },
            {
              route: `/where_to_find_us`,
              title: `Where To Find Us`,
            },
            {
              route: `/tributes`,
              title: `Tributes`,
            },
            {
              route: `/contact_us`,
              title: `Contact`,
            },
          ].map((link, index) => (
              <motion.div custom={index} className="block text-shadow-xl font-semibold mt-4 text-white md:inline-block w-36 md:w-auto mx-auto md:mt-0 md:ml-6"
                          key={link.title} variants={menuItemVariants} animate={"animate"} initial={"initial"} whileHover={"whileHover"}>
                <Link to={link.route}>
                  <motion.div onClick={() => {
                    setTimeout(() => {
                      console.log(document?.getElementById("md-page"));
                      document?.getElementById("md-page")?.scrollIntoView({ behavior: "smooth", inline: "end", block: "start" });
                    }, 100);

                  }}>
                    <span>{link.title}</span>
                    <motion.hr variants={underlineVariants} />
                  </motion.div>
                </Link>
              </motion.div>
          ))}
          <motion.a
            className="block mt-5 mb-2 text-white no-underline md:mb-0 md:inline-block md:mt-0 md:ml-6 md:pr-3"
            href={"https://www.facebook.com/tcvallotment/"}
            variants={menuItemVariants}
            initial={"initial"}
            animate={"animate"}
            custom={8}
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
          </motion.a>
        </motion.nav>
      </div>
      </AnimatePresence>
    </header>
  );
}

export default Header;

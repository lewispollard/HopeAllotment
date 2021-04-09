import React, { useEffect, useState } from "react";
import GatsbyImage from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";

const headingVariants = {
    initial: { opacity: 0, scaleX: 0 },
    animate: { opacity: 1, scaleX: 1, transition: { type: "spring", stiffness: 700, damping: 64, mass: 0.7 } },
    exit: { opacity: 0, scaleX: 0 }
}

export default function Template({ children, pageContext, data, ...props}) {
  return (
    <article id={"md-page"} className="md-page prose prose-green flex flex-col justify-start items-center">
      <motion.h1 initial={"initial"} animate={"animate"} exit={"exit"} variants={headingVariants} className={"heading_pattern"}>{pageContext?.frontmatter?.title}</motion.h1>
      <h4 className={"md-date"}><span className={"font-light"}> Published on </span> {pageContext?.frontmatter?.date}</h4>


      {children}
    </article>
  )
}
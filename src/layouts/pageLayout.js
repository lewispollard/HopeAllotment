import React, { useEffect, useState } from "react";
import GatsbyImage from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
export default function Template({ children, pageContext, data, ...props}) {

  return (
    <article id={"md-page"} className="md-page prose prose-green flex flex-col justify-start items-center">
      <h1 className={"heading_pattern"}>{pageContext?.frontmatter?.title}</h1>
      <h4 className={"md-date"}><span className={"font-light"}> Published on </span> {pageContext?.frontmatter?.date}</h4>


      {children}
    </article>
  )
}
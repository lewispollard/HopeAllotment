import React, { useEffect, useState } from "react";
import GatsbyImage from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
export default function Template({ children, pageContext, data, ...props}) {
  const [frontMatter, setFrontMatter] = useState(pageContext?.frontMatter);
  useEffect(() => {
    console.log(pageContext)
    setFrontMatter(pageContext?.frontmatter);
  }, [pageContext]);

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <article className="md-page prose prose-green lg:prose-lg flex flex-col justify-start items-center">
      <h1 className={"heading_pattern"}>{frontMatter?.title}</h1>
      <h4 className={"md-date"}><span className={"font-light"}> Published on </span> {frontMatter?.date}</h4>


      {children}
    </article>
  )
}

/**
 *       <GatsbyImage
 image={frontMatter?.featured_image}
 className="block w-5/6 md:w-2/3 mx-auto mb-6 rounded-xl shadow-lg"
 alt="Planting a small plant by hand"
 objectFit="scale-down"
 />
 */
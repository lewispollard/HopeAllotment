import React from "react";
import { graphql } from "gatsby"
export default function Template({ data, }) {
  const { markdownRemark } = data // data.markdownRemark holds post data
  const { frontmatter, html } = markdownRemark;
  return (
    <article className="md-page prose prose-green lg:prose-lg flex flex-col justify-start items-center">
        <h1 className={"headingpattern"}>{frontmatter.title}</h1>
        <h4 className={"md-date"}><span className={"font-light"}> Published on </span> {frontmatter.date}</h4>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </article>
  )
}/*
export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`*/
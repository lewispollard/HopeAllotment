/* eslint-disable no-undef */
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const path = require("path");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  pathPrefix: "/HopeAllotment",
  siteMetadata: {
    title: `HOPE Community Allotment`,
    description: `Home of the HOPE community allotment project, Sheffield, UK.`,
    author: `HOPE Community Allotment`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
   `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HOPE Community Allotment`,
        short_name: `HOPE`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal,
        display: `minimal-ui`,
        icon: `src/images/bigleaf.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`@tailwindcss/jit`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};

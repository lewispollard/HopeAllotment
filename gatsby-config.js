/* eslint-disable no-undef */
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

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
    "gatsby-plugin-layout",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HOPE Community Allotment`,
        short_name: `HOPE`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/bigleaf.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
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

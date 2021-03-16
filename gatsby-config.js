/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/about/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],

  siteMetadata: {
    title: "...To Live Is To Risk It All...",
    description: "website for portfolio",
    copyright: "This website is copyright 2021 One Fan",
  },
}

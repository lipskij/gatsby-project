/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/about/*`] },
    },
  ],

  siteMetadata: {
    title: "One Fan",
    description: "website for portfolio",
    copyright: "This website is copyright 2021 One Fan",
  },
}

module.exports = {
  siteMetadata: {
    title: `Rodegher Showcase`,
    description: `Rodegehr Vanessa - Developer | Designer - Online Showcase`,
    author: `Vanessa`,
  },
  plugins: [
    
      /* {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      }, */
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

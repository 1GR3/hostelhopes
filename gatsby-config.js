/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `hostelhop`,
    description: `Just focus on the good bits of your next adventure.`,
    image: `./images/hostelhop.png`,
    siteUrl: `https://hostelhop.io/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Hostel Hop",
        short_name: "hostelhop",
        start_url: "/",
        background_color: "#27a7b8",
        theme_color: "#2e2e51",
        display: "standalone",
        icon: "src/images/hostelhop.png",
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  // disable plugins
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-well-known`,
      options: {},
    }
  ],
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `hostelhop`,
    siteUrl: `https://www.yourdomain.tld`,
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
  ],
};

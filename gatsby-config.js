module.exports = {
  siteMetadata: {
    title: "Jacine Luisi",
    desc: ""
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jacine Luisi",
        short_name: "Jacine",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: "<!--break-->",
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800
            }
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-"
            }
          }
        ]
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: "gatsby-plugin-sass",
      options: {
        expanded: true
      }
    }
  ]
};

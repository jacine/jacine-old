/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *      https://www.gatsbyjs.org/docs/bound-action-creators/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const postTemplate = path.resolve(`./src/templates/Post.js`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        });
      });
      resolve();
    });
  });
};

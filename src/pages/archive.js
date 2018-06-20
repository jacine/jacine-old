import React from "react";
import Teaser from "../components/Teaser";

const ArchivePage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Teaser key={edge.node.id} post={edge.node} />);

  return <div>{Posts}</div>;
};

export default ArchivePage;

export const pageQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tumblr
            comments
          }
        }
      }
    }
  }
`;

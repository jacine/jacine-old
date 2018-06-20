import React from "react";
import Disqus from '../components/Disqus';

// The data prop will be injected by the GraphQL query.
export default function Template({ data }) {

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  let postDate = null;
  if (frontmatter.date) {
    postDate = <footer className="post__meta">
      <p>Posted on <time>{ frontmatter.date }</time></p>
    </footer>
  }

  let comments = null;
  if (frontmatter.comments && frontmatter.tumblr) {
    comments = <section className="post__comments">
    <Disqus
      shortname="jacine"
      url={ `http://jacine.net${ frontmatter.path }`}
      />
    </section>;
  }

  return (
    <article className="post">
      <div className="post__container">
        <h1 className="post__title">{ frontmatter.title }</h1>
        <div className="post__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      { postDate }
      { comments }
    </article>
  );
}

export const pageQuery = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tumblr
        comments
      }
    }
  }
`;

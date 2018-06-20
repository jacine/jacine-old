import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const TeaserHeading = styled.h2`
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
`

const TeaserDate = styled.time`
  color: #777;
  display: block;
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1;
  margin-bottom: 1rem;
`;

const TeaserContent = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

const Teaser = ({ post }) => (
  <article style={{
    borderBottom: "solid 1px #eee",
    margin: "2rem 0 3rem 0",
    paddingBottom: "1em"
  }}>
    <Link
      to={ post.frontmatter.path}
      style={{ textDecoration: "none" }}
      >
      <TeaserHeading>{ post.frontmatter.title }</TeaserHeading>
    </Link>
    <TeaserDate>{post.frontmatter.date}</TeaserDate>
    <TeaserContent>
      <p>{post.excerpt}</p>
    </TeaserContent>
  </article>
);

export default Teaser;

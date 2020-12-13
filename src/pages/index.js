import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
         fragment SanityImage on SanityMainImage {
           asset {
             _id
             localFile {
               childImageSharp {
                 fluid (maxWidth: 2560){
                  srcSet
                  srcSetWebp
                 }
               }
             }
           }
         }
         fragment SanityPreviewImage on SanityMainImage {
           asset {
             _id
             localFile {
               childImageSharp {
                fluid (maxWidth: 420) {
                  srcSet
                  srcSetWebp            }
               }
             }
           }
         }

         query IndexPageQuery {
           site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
             title
             description
             keywords
           }
           posts: allSanityPost(
             limit: 6
             sort: { fields: [publishedAt], order: DESC }
             filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
           ) {
             edges {
               node {
                 id
                 publishedAt
                 mainImage {
                   ...SanityPreviewImage
                   alt
                 }
                 title
                 _rawExcerpt
                 slug {
                   current
                 }
               }
             }
           }
         }
       `;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 hidden>Bem vindo ao {site.title}</h1>
        {postNodes && (
          <BlogPostPreviewList
            title="Posts recentes"
            nodes={postNodes}
            browseMoreHref="/blog/"
          />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;

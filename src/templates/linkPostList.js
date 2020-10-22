import React from "react";
import _ from "lodash";
import { graphql } from "gatsby";

import { Layout } from "../components/index";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const pageQuery = graphql`
  query($url: String)   {
    sitePage(path: {eq: $url}) {
      id
    }
    allFeedinoreader {
      nodes {
        link
        title
        pubDate
        id
      }
    }
  }
`;

export default class LinkList extends React.Component {
    render() {

    return (
      <Layout {...this.props}>
        <Header
          {...this.props}
          site={this.props.pageContext.site}
          page={this.props.pageContext}
          image={_.get(
            this.props,
            "pageContext.site.siteMetadata.header.background_img",
            null
          )}
        />
        <div id='content' className='site-content'>
          <main id='main' className='site-main inner'>

            <div className='post-feed'>
            {_.map(this.props.data.allFeedinoreader.nodes, (node) => (
              <article key={node.id} className='post'>
                <h2 className='post-title'>
                  <a href={node.link}>{node.title}</a>
                </h2>
              </article>
            ))}
            </div>

          </main>
          <Footer
            {...this.props}
            site={this.props.pageContext.site}
            page={this.props.pageContext}
            image={_.get(
              this.props,
              "pageContext.site.siteMetadata.header.background_img",
              null
            )}
          />
        </div>
      </Layout>
    );
  }
}

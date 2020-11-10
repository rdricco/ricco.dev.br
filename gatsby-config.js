// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})
const config = require('./data/SiteConfig')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: 'https://ricco.dev.br'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pt-br'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...config.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    'gatsby-source-sanity-transform-images',
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.YOUR_GOOGLE_ANALYTICS_TRACKING_ID,
    //     head: true,
    //     anonymize: true,
    //     respectDNT: true,
    //     pageTransitionDelay: 0,
    //     defer: true,
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: process.env.DOMAIN,
    //     // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID"
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     includeInDevelopment: true, // optional parameter to include script in development
    //     id: process.env.YOUR_HOTJAR_ID,
    //     sv: process.env.YOUR_HOTJAR_SNIPPET_VERSION,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.YOUR_SENTRY_ID,
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: config.themeColor,
        // Disable the loading spinner.
        showSpinner: true
      }
    },
    {
      resolve: '@debiki/gatsby-plugin-talkyard',
      options: {
        talkyardServerUrl: process.env.YOUR_TALKYARDSERVERURL
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'renato ricco | ricco.dev.br',
        short_name: 'ricco.dev.br',
        start_url: '/',
        background_color: '#000',
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: 'Favicon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allSanityPost } }) => {
    //           return allSanityPost.edges.map(edge => {
    //             return Object.assign({}, edge.node, {
    //               description: edge.node._rawExcerpt,
    //               date: edge.node.publishedAt,
    //               url: site.siteMetadata.siteUrl + edge.node.slug.current,
    //               guid: site.siteMetadata.siteUrl + edge.node.slug.current,
    //               custom_elements: [{ 'content:encoded': edge.node._rawExcerpt }]
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allSanityPost(
    //               allSanityPost(
    //                 sort: { fields: [publishedAt], order: DESC }
    //                 filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    //             ) {
    //               edges {
    //                 node {
    //                   id
    //                   publishedAt
    //                   mainImage {
    //                     ...SanityImage
    //                     alt
    //                   }
    //                   title
    //                   _rawExcerpt
    //                   slug {
    //                     current
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: "Your Site's RSS Feed",
    //       }
    //     ]
    //   }
    // }
  ]
}

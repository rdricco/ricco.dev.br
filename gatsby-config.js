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
    {
      resolve: 'gatsby-plugin-remove-console',
      options: {
        exclude: ['error', 'warn']
      }
    },
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
    {
      resolve: 'gatsby-transform-portable-text',
      options: {
        extendTypes: [{ typeName: 'SanityPost', contentFieldName: 'body' }]
      }
    },
    'gatsby-source-sanity-transform-images',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.YOUR_GOOGLE_ANALYTICS_TRACKING_ID,
        // head: true,
        // anonymize: true,
        // respectDNT: true,
        // pageTransitionDelay: 0,
        // defer: true,
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        cookieDomain: config.siteMetadata.siteUrl
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID"
      }
    },
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
        color: config.themeColor,
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
        name: config.siteTitle,
        short_name: config.short_name,
        start_url: '/',
        background_color: config.backgroundColor,
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
    }
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
    //             const { node } = edge
    //             const { excerpt } = node
    //             const { children } = excerpt
    //             return Object.assign({}, edge.node, children.text,{
    //               description: children.text,
    //               date: edge.node.publishedAt,
    //               url: site.siteMetadata.siteUrl + "/" + edge.node.slug.current,
    //               guid: site.siteMetadata.siteUrl + "/" + edge.node.slug.current,
    //               custom_elements: [{ 'content:encoded': children.text }]
    //             })
    //           })
    //         },
    //         query: `
    //         {
    //           allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
    //             edges {
    //               node {
    //                 id
    //                 title
    //                 slug {
    //                   current
    //                 }
    //                 publishedAt
    //                 excerpt {
    //                   children {
    //                     text
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //         `,
    //         output: '/rss.xml',
    //         title: "ricco.dev.br feed",
    //       }
    //     ]
    //   }
    // }
  ]
}

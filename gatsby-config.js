const siteMetadata = require("./site-metadata.json");

module.exports = {
  pathPrefix: "/",
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/content/portifolio`,
    //   },
    // },
    {
      resolve: `gatsby-source-pocket`,
      options: {
        consumerKey: "93856-b9bd1a0d7f4599f269d009d2",
        accessToken: "1b2ef548-e80c-15c1-50be-03affb",
        weeksOfHistory: 52,
        apiMaxRecordsToReturn: 3000,
        getCurrentWeekOnly: `n`,
        stateFilterString: "archive",
        tagFilter: true,
        tagFilterString: "shared",
        // favouriteFilter: false,
        // favouriteFilterValue: 0,
        // searchFilter: false,
        // searchFilterString: "Shared",
        // domainFilter: false,
        // domainFilterString: "buzzfeed.com",
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.inoreader.com/stream/user/1005941350/tag/Shared`,
        name: `inoreader`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        // parserOption: {
        //   customFields: {
        //     item: ["itunes:duration"],
        //   },
        // },
      },
    },
    {
      resolve: "gatsby-source-lastfm",
      options: {
        api_key: "006ef5dd9fbd84b5070fbb116662df43",
        username: "renatoakamur",
        limit: 10, // the maximum number of playbacks to pull in
      },
    },
    {
      resolve: '@debiki/gatsby-plugin-talkyard',
      options: {
        talkyardServerUrl: 'https://comments-for-rcc-wtf.talkyard.net'
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Fira Code", "Inter"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {},
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {},
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
      },
    },
  ],
};

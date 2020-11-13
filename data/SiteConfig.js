module.exports = {
  siteMetadata: {
    siteUrl: 'https://ricco.dev.br',
    siteTitle: 'renato ricco | ricco.dev.br',
    siteDescription: 'links, videos e outras recomendações.',
    short_name: 'ricco.dev.br',
  },
  siteTitleAlt: 'renatoricco',
  siteTagline:
    'Música, tecnologia, design, videos, links, glitches, notas pessoais e outras recomendações.',
  pathPrefix: '/',
  siteRss: '/rss.xml',
  themeColor: '#2ca9a9', // Used for setting manifest and progress theme
  backgroundColor: '#f7f0eb', // Used for setting manifest background
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'ezp6r2eb',
    dataset: process.env.GATSBY_SANITY_DATASET || 'production'
  }
}

export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'google-analytics',
      layout: {
        width: 'large'
      },
      options: {
        title: 'Last 30 days',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:date',
            metrics: 'ga:users, ga:sessions, ga:newUsers',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
          },
          chart: {
            type: 'LINE',
            options: {
              width: '100%'
            }
          }
        }
      }
    },
    {
      name: 'google-analytics',
      layout: {
        width: 'medium'
      },
      options: {
        title: 'World map',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:country',
            metrics: 'ga:users',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
          },
          chart: {
            type: 'GEO',
            width: '100%'
          }
        }
      }
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9f4f63840b86014045dd57',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-ho4v276z',
                  apiId: '45a560d4-ac5c-4a83-ab3f-6d1f749b15a0'
                },
                {
                  buildHookId: '5f9f4f63516df0009495fcd9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-web-fqz6t8gr',
                  apiId: 'ad628bae-19b0-4145-9f13-166f2bfb56e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rdricco/sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-web-fqz6t8gr.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Posts recentes', order: '_createdAt desc', types: ['post', 'work'] },
      layout: { width: 'medium' }
    }
  ]
}

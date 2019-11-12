export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dcaf9d56339fe6759b0f669',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio4-studio-4yhszphx',
                  apiId: '803be40a-b1af-416a-a788-f23f627869cd'
                },
                {
                  buildHookId: '5dcaf9d5dea4cf8d2ca2ad59',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio4-web',
                  apiId: 'ae19929e-3c30-4276-afd9-40169bf853b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-portfolio4',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio4-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

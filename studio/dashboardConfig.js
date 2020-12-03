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
                  buildHookId: '5fc84c4fa4fdfa52e82b6469',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kp5ori3b',
                  apiId: '03a4d6ac-eb9f-43e4-bb9c-3bc4840c1e48'
                },
                {
                  buildHookId: '5fc84c4feb1a8356d1769484',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-toxm3mjz',
                  apiId: 'ace23507-4e0a-41dd-bbcd-47ce23b85aa1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jwayn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-toxm3mjz.netlify.app',
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

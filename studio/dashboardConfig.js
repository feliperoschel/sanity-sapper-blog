export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '60398c9a0a596a137dfbaeb0',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-mu24yirs',
                  apiId: 'c13dd864-703e-4320-bffb-c748c82b092f'
                },
                {
                  buildHookId: '60398c9bbf1ef71e54ca85bf',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-94kg5wzr',
                  apiId: '7f7af210-b94f-400d-b609-b72afc46349d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/feliperoschel/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-94kg5wzr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

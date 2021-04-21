export default {
  widgets: [
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
                  buildHookId: '6080ab40fb054c46165e4529',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y8nqnphm',
                  apiId: 'c3f5477c-63e9-45de-9201-b7d8f7cfcddb'
                },
                {
                  buildHookId: '6080ab4060d070462fae814b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ww1inxar',
                  apiId: '683e92a2-34f9-40e1-b81a-de684988307e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wilderbonsai/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ww1inxar.netlify.app', category: 'apps'}
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

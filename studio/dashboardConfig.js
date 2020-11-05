export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fa3a44351e4f91757dfdf21',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yiusudh5',
                  apiId: '1325fd96-695f-487d-841c-ba1d21557169'
                },
                {
                  buildHookId: '5fa3a4430d43b6011fab2b98',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zq12ku2q',
                  apiId: '5e61058c-16c7-44e4-a747-b3dcd7f5b165'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JudeTejada/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zq12ku2q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

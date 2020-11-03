export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Configurações do Site',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrição',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Palavras-chave',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Autor',
      to: [{ type: 'author' }]
    }
  ]
}

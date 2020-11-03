export default {
  name: 'author',
  type: 'document',
  title: 'Autor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Em alguns front-eds pode ser necessário uma slug para exibir corretamente a url.',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Imagem'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biografia'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}

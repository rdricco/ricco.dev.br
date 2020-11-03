import { format } from 'date-fns'

export default {
  name: 'work',
  type: 'document',
  title: 'Portifolio',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      description: 'Títulos devem chamar a atenção, serem descritivos e curtos.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Em alguns front-eds pode ser necessário uma slug para exibir corretamente a url',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publicado em',
      description: 'A data pode ser usada para agendar uma publicação no futuro.'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Imagem principal'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Sumário',
      description:
        'Texto exibido em previews internos e como metatag da página - usada pelo google, facebook, etc.'
    },
    {
      name: 'authors',
      title: 'Autores',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categorias',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Data de Publicação new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Data de Publicação old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Data de publicação faltando.'
      }
    }
  }
}

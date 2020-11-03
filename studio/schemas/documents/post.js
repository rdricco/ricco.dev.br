import { format } from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
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
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools', // use seo-tools type
      options: {
        baseUrl: 'https://sanity-gatsby-web-fqz6t8gr.netlify.app/', // (REQUIRED) This is the baseUrl for your site
        baseUrl(doc) {
          return 'https://sanity-gatsby-web-fqz6t8gr.netlify.app/' // for dynamic baseUrls
        },
        slug(doc) {
          // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
          return doc.slug.current
        },
        fetchRemote: false, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
        body(doc) {
          return 'simple html representation of your doc' // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
        },
        // title(doc) {
        //   return 'page title' // (OPTIONAL) return page title otherwise inferred from scrape
        // },
        // description(doc) {
        //   return 'page description' // (OPTIONAL) return page description otherwise inferred from scrape
        // },
        // locale(doc) {
        //   return 'page locale' // (OPTIONAL) return page locale otherwise inferred from scrape
        // },
        contentSelector: 'body' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      }
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

import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md'
import { MdPerson, MdDescription, MdLocalOffer, MdImage, MdInsertLink } from 'react-icons/md'
import IframePreview from '../previews/IframePreview'

// Web preview configuration
const remoteURL = 'https://sanity-gatsby-web-fqz6t8gr.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL })
    ])
  }
  return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Conteúdo')
    .items([
      S.listItem()
        .title('Configurações')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Blog posts')
        .icon(MdDescription)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Portifolio')
        .icon(MdImage)
        .schemaType('work')
        .child(S.documentTypeList('work').title('Trabalhos')),
      S.listItem()
        .title('Links')
        .icon(MdInsertLink)
        .schemaType('link')
        .child(S.documentTypeList('link').title('Links')),
      S.listItem()
        .title('Autores')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Autores')),
      S.listItem()
        .title('Categorias')
        .icon(MdLocalOffer)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categorias')),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          !['category', 'author', 'work', 'post', 'link', 'siteSettings'].includes(listItem.getId())
      )
    ])

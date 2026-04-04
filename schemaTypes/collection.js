export default {
  name: 'collection',
  title: 'Colecciones',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nombre de la Colección',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image'
    }
  ]
}
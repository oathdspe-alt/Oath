export default {
  name: 'product',
  title: 'Productos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number'
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text'
    },
    {
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'collection',
      title: 'Colección',
      type: 'reference',
      to: [{ type: 'collection' }]
    }
  ]
}
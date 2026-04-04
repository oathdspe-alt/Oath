export default {
  name: 'collection',
  title: 'Colecciones',
  type: 'document',
  fields: [
    { name: 'title', title: 'Nombre de la Colección', type: 'string' },
    { name: 'slug', title: 'URL', type: 'slug', options: { source: 'title' } },
    { name: 'image', title: 'Imagen', type: 'image' },
  ]
}
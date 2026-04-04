export default {
  name: 'product',
  title: 'Productos',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nombre', type: 'string' },
    { name: 'slug', title: 'URL', type: 'slug', options: { source: 'name' } },
    { name: 'price', title: 'Precio (S/)', type: 'number' },
    { name: 'description', title: 'Descripción', type: 'text' },
    { name: 'image', title: 'Imagen', type: 'image' },
    { name: 'collection', title: 'Colección', type: 'reference', to: [{type: 'collection'}] }
  ]
}
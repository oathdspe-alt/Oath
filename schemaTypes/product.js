export default {
  name: 'product',
  title: 'Productos',
  type: 'document', // 🔥 ESTE ES EL FIX IMPORTANTE
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
      options: { source: 'name' } 
    },
    { 
      name: 'price', 
      title: 'Precio (S/)', 
      type: 'number' 
    },
    { 
      name: 'description', 
      title: 'Descripción', 
      type: 'text' 
    },

    // 🔥 MÚLTIPLES IMÁGENES
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
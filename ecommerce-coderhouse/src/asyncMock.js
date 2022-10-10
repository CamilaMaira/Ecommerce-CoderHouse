const products =  [
  { 
      id: '1', 
      name: 'Feminizine #1', 
      price: 3500, 
      category: 'Fanzines', 
      img:'https://www.rayitasazules.com/wp-content/uploads/2018/02/Siete-fanzines-a-los-que-no-perderles-la-pista.jpg', 
      // img: '/images/nombredeimagen.jpg',
      stock: 25, 
      description:'FEMINIZINE es una publicación realizada durante los años 2012 al 2014 y editada por Bombas para Desayunar. Su principal objetivo fue dar difusión al trabajo realizado por mujeres desde el feminismo y la cultura alternativa. '
  },

  { id: '2', 
    name: '¿Cómo vivir de ahora en adelante?', 
    price: 800, 
    category: 'celular', 
    img:'https://hambrehambrehambre.com/wp-content/uploads/2022/08/comovivirdeahoraenadelante.jpg', 
    stock: 16, 
    description:'Publicación que compila las cartas entre la artista visual chilena Paz Ortúzar y 11 mujeres y disidencias con prácticas creativas en medio de la pandemia de Covid-19.'
  },

  {
    id: '3', 
    name: 'Odio a las fachas',
    price: 1200, 
    category: 'tablet', 
    img:'https://1.bp.blogspot.com/-Ty_ZZoUFzIg/XylamXjHNCI/AAAAAAAABxE/bRWZMHFxascVtiR69IvGZYHDyjPWInNgwCLcBGAsYHQ/s2048/portadafachas_color.jpg', 
    stock: 10, 
    description:'Odio a los fachas, poemario.'}
]

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 700)
  })
}

export const getProductById = (id) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(products.find(prod => {
        return prod.id === id
      }))
    }, 700)
  })
}

export const getProductByCategory = (categoryId) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 700)
  })
}
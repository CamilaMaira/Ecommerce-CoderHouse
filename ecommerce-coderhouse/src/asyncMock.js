import feminizineImg from './assets/img/feminizine-1.jpg'
import comoImg from './assets/img/como-2.jpg'

const products =  [
  { 
      id: '1', 
      name: 'Feminizine #1', 
      price: 3500, 
      category: 'fanzines', 
      //img:'https://www.rayitasazules.com/wp-content/uploads/2018/02/Siete-fanzines-a-los-que-no-perderles-la-pista.jpg', 
       img: feminizineImg,
      stock: 25, 
      description:'Feminizine #1 es una publicación realizada durante los años 2012 al 2014 y editada por Bombas para Desayunar. Su principal objetivo fue dar difusión al trabajo realizado por mujeres desde el feminismo y la cultura alternativa. '
  },

  { id: '2', 
    name: '¿Cómo vivir de ahora en adelante?', 
    price: 5000, 
    category: 'fanzines', 
    //img:'https://hambrehambrehambre.com/wp-content/uploads/2022/08/comovivirdeahoraenadelante.jpg', 
    img: comoImg,
    stock: 16, 
    description:'Publicación que compila las cartas entre la artista visual chilena Paz Ortúzar y 11 mujeres y disidencias con prácticas creativas en medio de la pandemia de Covid-19.'
  },

  {
    id: '3', 
    name: 'Odio a las fachas',
    price: 3200, 
    category: 'tablet', 
    img:'https://1.bp.blogspot.com/-Ty_ZZoUFzIg/XylamXjHNCI/AAAAAAAABxE/bRWZMHFxascVtiR69IvGZYHDyjPWInNgwCLcBGAsYHQ/s2048/portadafachas_color.jpg', 
    stock: 10, 
    description:'Odio a los fachas, poemario.'
  },

  { id: '4', 
  name: 'Nadie miraba hacia aquí. Un ensayo sobre arte y VIH', 
  price: 26000, 
  category: 'libros', 
  img:'https://assets.bigcartel.com/product_images/324022839/Captura+de+pantalla+2021-12-19+a+las+15.40.30.png?auto=format&fit=max&w=1500', 
  stock: 16, 
  description:'Nadie miraba hacia aquí es un pequeño ensayo sobre la confluencia entre la última gran epidemia del siglo XX y el arte contemporáneo. Sobre cómo la marginación y el abandono al que fueron sometidas las personas que vivían con VIH/sida desató una corriente de rabia, denuncia y tristeza por la pérdida, que dio como resultado algunas de las obras más profundamente políticas y radicales de la contemporaneidad.', }
]

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(products.find(prod => {
        return prod.id === id
      }))
    }, 1000)
  })
}

export const getProductByCategory = (categoryId) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 1000)
  })
}
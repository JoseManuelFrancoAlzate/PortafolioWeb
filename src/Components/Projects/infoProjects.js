import imageAnimeCards from '../../Images/animeCards.png'
import imageBuenosGranizados from '../../Images/buenosGranizados.png'
import imageCountries from '../../Images/countries.png'
import imageDogs from '../../Images/dogs.png'
import imageMarigla from '../../Images/marigla.png'
import imageMedicam from '../../Images/medicam.png'
import imageNifytigo from '../../Images/nifitygo.png'
import imagePuertasEnVidrio from '../../Images/puertasEnVidrio.png'

const arrayProjects = [{
    id: 1,
    name:"Countries",
    image:imageCountries,
    description: 'En esta página web encontrarás una amplia variedad de paises, cada uno muestra información propia en tarjetas individuales',
    technologies: ['MongoDB', 'Express.js', 'ReactJS', 'NodeJS']
}, {
    id:2,
    name:"Dogs",
    image: imageDogs,
    description: 'En esta página web encontrarás una amplia variedad de perros, cada uno muestra información propia en tarjetas individuales',
    technologies: ['MongoDB', 'Express.js', 'ReactJS', 'NodeJS']
},{
    id:3,
    name:"Nifitygo",
    image:imageNifytigo,
    description: 'Página web en donde simulamos vender NFTs. Implementamos registros e inicios de sesión tanto de usuarios como de administradores, en donde estos podían crear NFTs para así venderlos o comprarlos por medio de PayPal, entre muchas otras funcionalidades.',
    technologies: ['MongoDB', 'Express.js', 'ReactJS', 'NodeJS']
},{
    id:4,
    name:"Puertas en vidrio",
    image:imagePuertasEnVidrio,
    description: ' página web para mostrar los servicios de negocio de un vidriero profesional, con el objetivo de aumentar las ventas de este servicio.',
    technologies: ['MongoDB', 'Express.js', 'ReactJS', 'NodeJS']
},
{
    id:5,
    name:"Cartas Anime",
    image:imageAnimeCards,
    description: 'Pagina web en donde se muestra una gran variedad de animes, pesonajes y poderes',
    technologies: ['MongoDB', 'Express.js', 'ReactJS', 'NodeJS']
},
{   id: 6,
    name:"Ventas Marigla",
    image: imageMarigla,
    description: 'Pagina web que muestra la gran variedad de productos que vende una comerciante, como ropa, muebles y muchos otros productos.',
    technologies: ['MongoDB', 'Express.js', 'ReactJS', 'NodeJS']
},    {
    id: 7,
    name:"Buenos granizados",
    image:imageBuenosGranizados,
    description: 'Plataforma web completa que muestra la variedad de granizados disponibles. ',
    technologies: ['MongoDB', 'Express.js', 'ReactJS', 'NodeJS']
},
{
    id:8,
    name:"Medicam",
    image:imageMedicam,
    description: 'Página web que permite a pacientes programar consultas médicas virtuales con acceso a historiales médicos, videollamadas seguras y gestión de citas por parte de administradores',
    technologies: ['MongoDB', 'Express.js', 'ReactJS', 'NodeJS']
}
]


//Hacer un filtrado segun el name
const idProject = (id)=>{

    if(!id){
        console.error("Id inexistente");
        window.location.href = '/'
    }else if(id){
     const resultado = arrayProjects.find(arrayProjects=> arrayProjects.id === id)
     return resultado
    } else {return 'Id Inexistente'} 
}
 
export {arrayProjects, idProject}
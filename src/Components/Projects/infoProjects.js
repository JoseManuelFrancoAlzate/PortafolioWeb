import imageAnimeCards from '../../Images/animeCards.png'
import imageBuenosGranizados from '../../Images/buenosGranizados.png'
import imageCountries from '../../Images/countries.png'
import imageDogs from '../../Images/dogs.png'
import imageMarigla from '../../Images/marigla.png'
import imageMedicam from '../../Images/medicam.png'
import imageNifytigo from '../../Images/nifitygo.png'
import imagePuertasEnVidrio from '../../Images/puertasEnVidrio.png'
import imageTemporizador from "../../Images/temporizador.png"
import imageNftsTarjet from "../../Images/ImgNfts/NftsTarjet.png"
//ImagenesInfoProjects

//Countries
import imageCountriesGif from "../../Images/imgCountries/Countries-Web.gif"
import imageInfoCountries from "../../Images/imgCountries/infoCountries.png"
import imageLoginCountries from "../../Images/imgCountries/loginCountries.png"
//Dogs
//import imageDogsGif from "../../Images/imgDogs/Dogs-Web.gif"
import imageInfoDogs from "../../Images/imgDogs/infoDogs.png"
import imageLoginDogs from "../../Images/imgDogs/loginDogs.png"
//Nfts
import imageInfoNfts from "../../Images/ImgNfts/NftsInfo.png"
import imageLoginNfts from "../../Images/ImgNfts/NftsLogin.png"
import imageRegisterNfts from "../../Images/ImgNfts/NftsRegister.png"
import gifAboutNfts from "../../Images/ImgNfts/NftsAbout.gif"
import ImageCarritoNfts from "../../Images/ImgNfts/NftsCarrito.png"
import ImageInicioNfts from "../../Images/ImgNfts/NftsInicio.png";
import ImageUpdateNfts from "../../Images/ImgNfts/NftsUpdate.png"
import gifCreateNfts from "../../Images/ImgNfts/NftsCreation.gif"
//puertasEnVidrio
import imageMisionVidrio from "../../Images/imgVidrio/misionVidrio.png"
import imageInicioVidrio from "../../Images/imgVidrio/inicioVidrio.png"
import imageVideoVidrio from "../../Images/imgVidrio/videoVidrio.png"
import imageCualidadesVidrio from  "../../Images/imgVidrio/cualidadesVidrio.png"
import imageDivisionesVidrio from "../../Images/imgVidrio/divisionesVidrio.png"
import imageFooterVideo from "../../Images/imgVidrio/footerVidrio.png"
import imageSomosVidrio from "../../Images/imgVidrio/somosVidrio.png"
import gifClientesVidrio from "../../Images/imgVidrio/clientesVidrioGif.gif"
import imageDivisionesVidrios from  "../../Images/imgVidrio/divisionesVidrios.png"
import imageFachadasVidrio from "../../Images/imgVidrio/fachadasVidrio.png"
import imagePuertasEnVidrios from "../../Images/imgVidrio/puertasEnVidrio.png"
//Anime
import imageLoginAnime from "../../Images/imgAnimes/imgLoginAnime.png"
import imageRegisterAnime from "../../Images/imgAnimes/imgRegisterAnime.png"
import gifAnimePersonajes from "../../Images/imgAnimes/gifAnimePersonajes.gif"
import gifPersonajesAnime from "../../Images/imgAnimes/gifPersonajesAnime.gif"
import gifPoderesAnime from "../../Images/imgAnimes/gifPoderesAnime.gif"
import gifPresentacionAnime from "../../Images/imgAnimes/gifPresentacionAnime.gif"
//Buenos Granizados
import imgGranizadosInicio from "../../Images/imgGranizados/GranizadosImgInicio.png"
import imgGranizadosEliminar from "../../Images/imgGranizados/GranizadosImgEliminar.png"
import imgGranizadosDescripcion from "../../Images/imgGranizados/GranizadosImgDescripcion.png"
import imgGranizadosCrear from "../../Images/imgGranizados/GranizadosImgCrear.png"
import imgGranizadosConfiguracion from "../../Images/imgGranizados/GranizadosImgConfiguracion.png"
import imgGranizadosAnuncio from "../../Images/imgGranizados/GranizadosImgAnuncio.png"
import imgGranizadosAdmin from "../../Images/imgGranizados/GranizadosImgAdmin.png"
//Cronometro
import gifCronometro from "../../Images/imgCronometro/Cronometro.gif"
import gifTemporizador from "../../Images/imgCronometro/Temporizador.gif"
import gifPestaña from "../../Images/imgCronometro/pestañaCronometro.gif"
//Medicam
import imageProfile from "../../Images/imgMedicam/doctors.png"
import imageDoctor from "../../Images/imgMedicam/profile.png"
import imageQuestions from "../../Images/imgMedicam/questions.png"
import imageTestimonials from "../../Images/imgMedicam/testimonials.png"
//Marigla
import gifPresentacionMarigla from "../../Images/imgMarigla/gifMariglaPresentacion.gif"
import gifHijosMarigla from "../../Images/imgMarigla/gifHijosMarigla.gif"
import gifPapasMarigla from "../../Images/imgMarigla/gifPapasMarigla.gif"
import gifMamasMarigla from "../../Images/imgMarigla/gifMamasMarigla.gif"
const arrayProjects = [{ 
    id: 1,
    name:"Countries",
    image:imageCountries,
    gif: imageCountriesGif,
    images:[ imageInfoCountries, imageLoginCountries],
    description: 'Countries es un proyecto que te permite explorar diferentes países y acceder a información detallada sobre ellos. Puedes filtrar, ordenar o buscar países, además de crear actividades personalizadas en tu país favorito.',
    content: "Este proyecto fue desarrollado durante el bootcamp en HolaSoyHenry y tiene como objetivo mostrar países mediante tarjetas informativas. Incluye un sistema de paginación, un buscador para encontrar países rápidamente, y opciones de filtrado por continente o actividad. Además, puedes organizar los países alfabéticamente o según su población. También tienes la posibilidad de seleccionar un país para crear y guardar actividades personalizadas.",
    functionsTitle: ["Login: ","Paginación: ","Barra de búsqueda: ","Filtros: ","Ordenación: ", "Actividad personalizada: ", "Relaciones de Países y Actividades: ", "Base de Datos Actualizada Automáticamente: ", "Manejo de Errores: "],
    functions: ["Sistema básico de inicio de sesión.", "Navega entre diferentes páginas de países con facilidad.", "Encuentra rápidamente cualquier país por su nombre.", "Filtra los países por continente o actividad.", " Organiza las tarjetas alfabéticamente o según la población de cada país.","Selecciona un país para crear y guardar una actividad relacionada con ese lugar.", "Los países pueden tener múltiples actividades asociadas, y las actividades pueden estar relacionadas con varios países.","Los datos de los países se sincronizan automáticamente con una API externa al iniciar el servidor.","Respuestas claras y personalizadas en caso de errores en las peticiones."],
    technologies: [ 'ReactJS', 'JavaScript', 'NodeJS','Sequelize.'],
    technologiesTable:[ 'ReactJS','Redux', 'NodeJS','Express.js','Axios','Sequelize'],
    descriptionTechnologies: ["Para desarrollar componentes dinámicos y reutilizables","Para gestionar el estado global de la aplicación y manejar el flujo de datos entre componentes", "Para desarrollo de backend  y gestion de peticiones del servidor", "Para gestionar rutas y simplificar el desarrollo del servidor.","Para hacer peticiones HTTP y manejar la comunicación con la API","Para gestionar bases de datos relacionales mediante modelos y consultas optimizadas."],
    fecha: 'Mayo/2023 - Junio/2023',
    ocupacion: "Fullstack"
}, {
    id:2,
    name:"Dogs",
    image: imageDogs,
    gif: "/Dogs-Web.gif",
    images: [imageLoginDogs, imageInfoDogs],
    description: 'Dogs es un proyecto que te permite explorar distintos tipos de perros y acceder a informacion detallada sobre ellos. Puedes filtrarlos, ordenarlos y buscarlos, ademas de crear perros personalizados.',
    content: "Este es otro de mis proyectos desarrollados durante el bootcamp de HolaSoyHenry. Su objetivo es mostrar distintos tipos de perros mediante tarjetas informativas. Incluye un sistema de paginación, un buscador para encontrar perros rápidamente y opciones de filtrado por temperamento, tamaño, perros creados o existentes en la base de datos. Además, puedes organizar los perros alfabéticamente y crear nuevos perros personalizados según tus preferencias",
    functionsTitle: ["Log*in: ", "Paginacion: ", "Barra de búsqueda: ", "Filtros: ", "Ordenación: ", "Creacion de perros: ", "Relaciones de Perros y Temperamentos: ", "Base de Datos Actualizada Automáticamente: ", "Manejo de Errores: "],
    functions: ["Sistema básico de inicio de sesión.","Navega entre diferentes páginas de perros con facilidad.", "Encuentra rápidamente cualquier perro por su nombre.", "Filtra los perros por temperamento,  filtrado por temperamento, tamaño, creados o existentes en la base de datos.", "Organiza las tarjetas alfabéticamente","Crea un perro eligiendo sus características y seleccionando sus distintos tipos de temperamento."," Los perros pueden tener múltiples temperamentos asociados, y los temperamentos pueden estar relacionadas con varios perros, Los datos de los países se sincronizan automáticamente con una API externa al iniciar el servidor.", "Respuestas claras y personalizadas en caso de errores en las peticiones."],
    technologies: [ 'ReactJS','JavaScript', 'NodeJS','Sequelize.'],
    technologiesTable:[ 'ReactJS','Redux', 'NodeJS','Express.js','Axios','Sequelize'],
    descriptionTechnologies: ["Para desarrollar componentes dinámicos y reutilizables","Para gestionar el estado global de la aplicación y manejar el flujo de datos entre componentes", "Para desarrollo de backend  y gestion de peticiones del servidor", "Para gestionar rutas y simplificar el desarrollo del servidor.","Para hacer peticiones HTTP y manejar la comunicación con la API","Para gestionar bases de datos relacionales mediante modelos y consultas optimizadas."],
    fecha:"Junio/2023 - Julio/2023",
    ocupacion: "Fullstack"
},{
    id:3,
    name:"Nifitygo", 
    gif: ImageInicioNfts,
    image:imageNifytigo,
    images: [imageInfoNfts, imageLoginNfts, imageRegisterNfts,  ImageCarritoNfts, ImageUpdateNfts, gifCreateNfts, imageNftsTarjet, gifAboutNfts],
    description: 'Niftygo es una plataforma web que simula la compra y venta de NFTs. Los usuarios pueden explorar distintos NFTs, ver sus precios y descripciones, y realizar transacciones de compra utilizando PayPal.',
    content: "Este fue mi proyecto final y grupal en el Bootcamp de HolaSoyHenry, en el que participamos un total de 8 integrantes. Al inicio de la jornada nos reuniamos para asi planear como construiriamos una página web en donde simulamos vender NFTs. Implementamos registros e inicios de sesión tanto de usuarios como de administradores en donde estos podían crear NFTs para así venderlos, o comprarlos por medio de paypal.",
    functionsTitle: ["Login: ", "Paginacion: ", "Registro: ",   "Barra de busqueda: ", "Filtros: ", "Creacion de nft's: ","Carrito de compras: ", "Compra de nft's: ",  "Actualizacion de datos personales: "],
    functions: ["Sistema de inicio de sesión con email y contraseña, además de la opción de login con Google. Incluye validación de campos, manejo de errores y redirección tras un inicio de sesión exitoso.", "Navega entre diferentes páginas de países con facilidad.","Sistema de registro de usuario con campos para nombre de usuario, nombre, apellido, correo electrónico, contraseña, teléfono y país. Incluye validación de los campos, manejo de errores y muestra mensajes de éxito o fallo tras el intento de creación de cuenta.", "Encuentra rápidamente cualquier Nfts por su nombre.","Filtra los Nfts por categoria. ", "Ordena los Nfts por precio o abecedario. ", "Muestra los NFTs añadidos al carrito de un usuario, incluyendo detalles como nombre, imagen y precio. Permite eliminar un NFT del carrito con una funcionalidad de borrado mediante un botón. El total del carrito y su estado también se presentan al usuario, con navegación integrada a una página de compra. Incluye manejo de estado, peticiones a la API para obtener y actualizar los datos en tiempo real, y validación de respuestas.", "Sistema que permite adquirir NFTs directamente desde una tarjeta o el carrito de compras. Incluye visualización de detalles del producto, cálculo automático del precio total y pago integrado con PayPal. ", "Actualización de datos personales: Formulario que permite a los usuarios editar su información como nombre, apellido, país, teléfono, contraseña e imagen de perfil. Incluye validación de campos, carga de imágenes a Cloudinary, vista previa de imágenes, y muestra mensajes de éxito o error tras la actualización"],
    technologies: ['Sequelize', 'Express.js', 'ReactJS', 'NodeJS'],
    technologiesTable:[ 'ReactJS','Redux', 'SweetAlert2	', "PayPal y MercadoPago",'NodeJS','Express.js','Axios','Sequelize', "Jsonwebtoken(JWT)"],
    descriptionTechnologies: ["Para desarrollar componentes dinámicos y reutilizables", "Para gestionar el estado global de la aplicación y manejar el flujo de datos entre componentes","Para mostrar notificaciones y alertas personalizadas en la interfaz.", "PayPal y MercadoPago","Para desarrollo de backend  y gestion de peticiones del servidor", "Para gestionar rutas y simplificar el desarrollo del servidor.","Para hacer peticiones HTTP y manejar la comunicación con la API","Para gestionar bases de datos relacionales mediante modelos y consultas optimizadas.", "Herramienta para autenticación segura mediante tokens."],
    fecha:"Agosto/2023 - Septiembre/2023",
    ocupacion: "Full-Stack"
},{
    id:4,
    name:"Puertas en vidrio",
    gif: imageSomosVidrio,
    image:imagePuertasEnVidrio,
    images: [imageMisionVidrio, imageInicioVidrio,imageVideoVidrio, gifClientesVidrio, imageCualidadesVidrio, imageDivisionesVidrio, imageFooterVideo, imageDivisionesVidrios, imageFachadasVidrio, imagePuertasEnVidrios],
    description: 'Página web diseñada para presentar los servicios de un vidriero profesional, enfocada en destacar su experiencia y calidad, con el objetivo de atraer nuevos clientes y aumentar las ventas.',
    content: "Este proyecto fue desarrollado junto con mi compañero Brandon para un cliente dedicado al trabajo como vidriero profesional. La página incluye un sistema de login para el administrador, un formulario que permite subir nuevos trabajos realizados, y secciones para mostrar la descripción y misión del negocio. Además, cuenta con una sección de videos que exhiben los distintos tipos de puertas que el cliente puede fabricar, destacando su experiencia y habilidad en el oficio.s",
    functionsTitle: ["Inicio - Presentación del negocio:","Login exclusivo para administradores:","Formulario para registrar nuevos trabajos:","Listado completo de tipos de vidrios:" ],  
    functions: [" Sección que destaca la descripción profesional de la empresa, su misión centrada en el cliente y sus valores fundamentales."," Sistema de inicio de sesión seguro, diseñado exclusivamente para administradores.","Formulario intuitivo que permite al administrador registrar y mostrar nuevos trabajos realizados."," Listado completo y detallado de los servicios ofrecidos, incluyendo los diferentes tipos de vidrios disponibles."],    
    technologies: ['Sequelize', 'Express.js', 'ReactJS', 'NodeJS'],
    technologiesTable:["ReactJS", "Redux", "Axios", "Cloudinary", "Express.js", "Sequelize"],
    descriptionTechnologies: ["Para desarrollar componentes dinámicos y reutilizables en el frontend.","Para gestionar el estado global de la aplicación y manejar el flujo de datos entre componentes.","Para realizar peticiones HTTP y manejar la comunicación con la API.","Para gestionar imágenes y videos en la nube, optimizando su carga y entrega.","Para gestionar rutas y simplificar el desarrollo del servidor en el backend.","Para manejar bases de datos relacionales mediante modelos, consultas y migraciones.","Para manejar autenticación segura mediante generación y validación de tokens.","Para reiniciar automáticamente el servidor durante el desarrollo, mejorando la productividad.",],
    fecha:"Septiembre/2023 - Octubre/2023",
    ocupacion: "Full-Stack"
},
{   id: 5,
    name:"Ventas Marigla",
    gif: gifPresentacionMarigla,
    image: imageMarigla,
    images: [gifMamasMarigla,gifHijosMarigla,gifPapasMarigla],
    description: "Sitio web que exhibe una amplia gama de productos ofrecidos por un comerciante, incluyendo ropa, muebles y diversos artículos, proporcionando a los clientes una experiencia de compra intuitiva y accesible.",
    content:"Este proyecto fue desarrollado para una comerciante profesional. Es un sitio web sencillo pero funcional, diseñado para exhibir la variedad de productos disponibles, con secciones dedicadas a ropa para hombres, mujeres y niños, facilitando la navegación y la compra para los usuarios.",
    functionsTitle: ["Login exclusivo para administradores:","Formulario para registrar nuevos trabajos:","Listado completo de tipos de ropa:" ], 
    functions:["Sistema de inicio de sesión seguro, diseñado exclusivamente para administradores.","Formulario intuitivo que permite al administrador registrar y mostrar nuevos trabajos realizados.", "Listado completo y detallado de los productos que se ofrece"],
    technologies: ['Sequelize', 'Express.js', 'ReactJS', 'NodeJS'],
    technologiesTable: ["ReactJS","Redux","Axios","Cloudinary","Bootstrap","Express.js","Sequelize","Nodemon","Morgan"],
    descriptionTechnologies: ["Para desarrollar interfaces de usuario dinámicas y modernas en el frontend.","Para gestionar el estado global de la aplicación y manejar el flujo de datos entre componentes.","Para realizar peticiones HTTP y manejar la comunicación entre el frontend y el backend.","Para gestionar imágenes y videos en la nube, optimizando su carga y entrega.","Para aplicar estilos rápidos y consistentes mediante su sistema de grillas y componentes prefabricados.","Para gestionar rutas y simplificar el desarrollo del servidor en el backend.","Para manejar bases de datos relacionales mediante modelos, consultas y migraciones.","Para registrar solicitudes HTTP entrantes, útil para depuración y monitoreo del servidor."],
    fecha:"Noviembre/2023 - Diciembre/2023",
    ocupacion: "Full-Stack"
},
{
    id:6,
    name:"Cartas Anime",
    gif: gifPresentacionAnime,
    image:imageAnimeCards,
    images: [imageLoginAnime, imageRegisterAnime, gifAnimePersonajes, gifPersonajesAnime, gifPoderesAnime],
description: 'Página web diseñada para presentar distintos animes, sus personajes y habilidades únicas.',
content: "Proyecto individual en el que desarrollé una plataforma interactiva. Los usuarios pueden explorar una lista de animes y, al seleccionar uno, visualizar a sus personajes destacados. Al hacer clic en un personaje, se despliega información detallada sobre sus habilidades y ataques especiales.",
    functionsTitle:["Login:","Registro:","Relaciones entre Animes, Personajes y Poderes:","Carga y Manejo de Imágenes:", ],
     functions: ["Permite a los usuarios iniciar sesión con credenciales seguras para acceder a sus cuentas.","Ofrece un formulario de registro para que los usuarios puedan crear nuevas cuentas.","Relación entre diferentes animes, sus personajes y poderes mediante modelos relacionales.","Carga de imágenes de personajes y animes con optimización en la nube mediante Cloudinary.",],
  technologies: ['Sequelize', 'Express.js', 'ReactJS', 'NodeJS'],
    technologiesTable: ["ReactJS","Redux","Axios","Express.js","Sequelize","Morgan",],
    descriptionTechnologies: ["Para crear interfaces de usuario modernas y reactivas en el frontend.","Para gestionar el estado global de la aplicación y manejar el flujo de datos entre componentes.","Para realizar solicitudes HTTP y manejar la comunicación entre el frontend y el backend.","Para construir y manejar el backend de manera eficiente con un framework minimalista.","Para interactuar con bases de datos relacionales mediante modelos, consultas y migraciones.","Para registrar solicitudes y respuestas HTTP, útil para depuración y monitoreo.", ],
    fecha:"Febrero/2024 - Marzo/2024",
    ocupacion: "Full-Stack"
},
{
    id: 7,
    name:"Buenos granizados",
    gif: imgGranizadosInicio,
    image:imageBuenosGranizados,
    images: [imgGranizadosEliminar,imgGranizadosDescripcion, imgGranizadosAdmin,imgGranizadosConfiguracion,imgGranizadosCrear,imgGranizadosAnuncio,],
    description: 'Plataforma de telemedicina diseñada para conectar pacientes con profesionales de la salud de manera eficiente y accesible.',
    content:"Página web individual desarrollada para un amigo vendedor de granizados. Los clientes pueden explorar una lista de granizados y, al hacer clic en una tarjeta, ver la descripción detallada de cada uno. Además, el administrador cuenta con múltiples funciones, como la creación, edición y eliminación de granizados, gestión de cuentas y otras opciones administrativas.",
    functionsTitle: ["Registro de administrador", "Inicio de sesión para administrador", "Creación de granizados", "Gestión de opciones administrativas"],
    functions: [" Formulario para que el administrador registre su cuenta de acceso."," Formulario para que el administrador inicie sesión en la plataforma."," Formulario para que el administrador cree nuevos granizados con sus respectivos detalles."," Conjunto de opciones administrativas, incluyendo eliminar granizados, reiniciar la página, eliminar cuentas y limpiar la carpeta de imágenes generadas."],
    technologies: ['Sequelize', 'Express.js', 'ReactJS', 'NodeJS'],
    technologiesTable: ["ReactJS","Redux",  "Axios","Express.js","Cloudinary",],
    descriptionTechnologies: ["Para construir interfaces de usuario dinámicas y reactivas en el frontend.","Para gestionar el estado global de la aplicación y manejar flujos de datos entre componentes.","Para realizar solicitudes HTTP y manejar la comunicación entre el frontend y el backend.","Framework minimalista para construir y manejar el backend, incluyendo rutas y middleware.","Servicio en la nube para almacenamiento y manipulación de imágenes de forma eficiente.",],
    fecha:" Abril/2024 - Mayo/2024",
    ocupacion: "Full-Stack"
},
{
    id:8,
    name:"Medicam",
    gif: imageMedicam,
    image:imageMedicam,
    images: [imageProfile, imageDoctor, imageQuestions, imageTestimonials],
    description: 'Plataforma de telemedicina desarrollada en equipo con noCountry, diseñada para que los pacientes puedan programar consultas médicas virtuales, acceder a historiales médicos, realizar videollamadas seguras y permitir la gestión de citas por parte de administradores.',
    content: "Medicam es un proyecto colaborativo desarrollado en noCountry con el propósito de ofrecer una solución integral para la telemedicina. La plataforma busca facilitar la programación de citas médicas virtuales para pacientes y optimizar la gestión de consultas para los médicos. Aunque el proyecto aún está en desarrollo, se lograron implementar funcionalidades clave como el registro de usuarios, la gestión básica de citas y el acceso seguro a información médica.",    
    functionsTitle:["Login", "Registro", "Búsqueda de especialistas:", "Educación en salud:","Solicitud de citas:", 
       // "Consulta en línea:"
    ],
    functions:[
        " Permite a los usuarios registrados acceder a sus cuentas para utilizar los servicios de telemedicina.",
        " Facilita la creación de nuevas cuentas tanto para pacientes como para especialistas médicos.",
        " Ofrece un sistema para encontrar especialistas por nombre o especialidad",
        " Proporciona contenido educativo sobre temas de salud.",
        " Permite a los pacientes programar citas con especialistas en los horarios disponibles.",
       // " Ofrece una plataforma para realizar consultas médicas virtuales mediante videollamadas seguras." 
    ],
    technologies: ["Next.js", "ReactQuery", "Tailwind ", "NodeJs", "SQL"],
    technologiesTable: ["Next.js", "React Query", "Tailwind", "Node.js", "Axios", "SQL"],
    descriptionTechnologies: [
        "Framework para React que permite crear aplicaciones web rápidas y optimizadas, con enrutamiento integrado y soporte para renderizado en el servidor.",
        "Librería para manejar datos de servidor en el frontend, optimizando la obtención, sincronización y almacenamiento en caché de datos.",
        "Framework CSS que facilita el diseño responsivo y moderno utilizando utilidades predefinidas.",
        "Entorno de ejecución para JavaScript utilizado en el backend, ideal para construir API escalables y de alto rendimiento.",
        "Librería para realizar solicitudes HTTP de manera sencilla, facilitando la comunicación entre el frontend y el backend.",
        "Sistema de gestión de bases de datos relacionales para almacenar y consultar información estructurada como usuarios, citas y especialistas."
    ],
    fecha:" Mayo/2024 - Junio/2024",
    ocupacion: "Full-Stack"
},
{
    id: 9, 
    name: "Cronómetro",                        
    gif: gifTemporizador,
    image:imageTemporizador,
    images: [gifCronometro, gifPestaña],
    description: "Aplicación web que permite activar un cronómetro y un temporizador, diseñada para adaptarse a diversas necesidades de medición de tiempo.",
    content: "Un proyecto que combina un temporizador y un cronómetro, pensado para la práctica de tareas cronometradas o para medir intervalos de tiempo. Incluye funcionalidad en tiempo real y opciones personalizables para diferentes usos.",
    functionsTitle: [
        "Cronómetro en vivo",
        "Temporizador personalizable",
        "Alternancia entre cronómetro y temporizador",
        "Modal reutilizable",
    ],
    functions: [
     
        " Proporciona un cronómetro que puede iniciarse, pausarse y reiniciarse, mostrando el tiempo en vivo con actualizaciones continuas desde el backend.",
        " Permite configurar un temporizador con una duración personalizada, pausarlo y reiniciarlo, mostrando el tiempo restante en pantalla.",
        " Interfaz dinámica que permite alternar entre la vista del cronómetro y el temporizador mediante un botón en el encabezado.",
        " Modal diseñado para capturar información o mostrar mensajes emergentes reutilizable en diversas partes del proyecto.",
    ],
    technologies: ["ReactJS", "SignalR", "ASP.NET Core", "SQL Server", "Redux"],
    technologiesTable: ["ReactJS", "Redux", "SignalR", "ASP.NET Core"], 
    descriptionTechnologies: [
        "Para construir interfaces de usuario dinámicas y reactivas en el frontend.", 
        "Para gestionar el estado global de la aplicación y manejar flujos de datos entre componentes.",
        "Para habilitar la comunic ación en tiempo real entre el frontend y el backend, utilizada en el cronómetro en vivo.", 
        "Framework para construir el backend, manejar endpoints y realizar operaciones CRUD.", 
    ],    
    fecha: "Octubre/2024 - Noviembre/2024",
    ocupacion:"Full-Stack"
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



//nft's:  Recupera datos del carrito desde el backend y adapta la compra según si es individual o múltiple, utilizando LocalStorage y Redux para gestionar el estado.
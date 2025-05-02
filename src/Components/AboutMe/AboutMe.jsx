import styles from './AboutMe.module.css'


const AboutMe = ()=>{
return(
    <div className={styles.container}>
<h1 className={styles.vignettes}>———————————————</h1>
        <h1 className={styles.title}>¿Quien soy?</h1>
        <p className={styles.about}>¡Hola! Soy Jose Franco y me apasiona la tecnología, estoy continuamente aprendiendo nuevas herramientas y técnicas para mejorar mis habilidades.</p>
       <p className={styles.about}>Disfruto trabajar tanto en el frontend como en el backend, y me esfuerzo por crear aplicaciones eficientes, seguras y con una buena experiencia de usuario.</p>
       <p className={styles.about}>Inicié en el mundo de la programación en octubre del 2022, donde decidí aprender HTML, CSS y JavaScript. Después de un mes, me inscribí en un BootCamp el cual comencé en noviembre de 2022. Allí aprendí sobre las tecnologías MERN y me gradué de este BootCamp en septiembre de 2023. Posteriormente, comencé a desarrollar proyectos individuales de forma autónoma para ganar experiencia. A mediados de mayo del año 2024, encontré la plataforma de noCountry, donde actualmente estoy elaborando proyectos en equipo.</p>
<a href="./CvDesarrolladorWeb.pdf"  download="CvDesarrolladorWeb.pdf">
<button className={styles.button}>Curriculim</button>
</a>
<h1 className={styles.vignettes}>———————————————</h1>
    </div>
)
}


export default AboutMe
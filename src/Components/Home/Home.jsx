
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Technologies from '../Technologies/Technologies'
import yotas from "../../ImgPerfil/yo.jpg"
import styles from './Home.module.css'
const Home = () => {

    return (
        <div>
            

            <div className={styles.container}>
                <div className={styles.containerJ}>
                <h1 className={styles.name}>José Franco</h1>
                <h2 className={styles.profession}>Desarrollador Full Stack</h2>
                <a href="https://www.linkedin.com/in/Josemanuelfrancoalzate" target="_blank" rel="noopener noreferrer">
                <img className={styles.linkendin} alt="Linkendin" src='logo-linkendin.png' />
                </a>
               <a href="https://github.com/JoseManuelFrancoAlzate  " target="_blank" rel="noopener noreferrer">
                <img className={styles.github} alt="GitHub" src='logo-github.jpg' />
                </a>
                <a href="https://wa.me/573229227773" target="_blank" rel="noopener noreferrer">
                <img className={styles.whatsapp} alt="Whatsapp" src="logo-whatsapp.png" />
                </a>
                <img className={styles.profilePicture} alt="profilePicture" src={yotas} />       
                </div> 
                <center>
            <div className={styles.containerI}>
                <h1 className={styles.vignettes}>———————————————</h1>
                <h1 className={styles.I}>Sobre Mi</h1>
                <p className={styles.myDescription}>Full stack developer con aproximadamente dos años de experiencia en el desarrollo de aplicaciones web. Actualmente, estudio de forma autodidacta y trabajo en proyectos individuales y grupales.</p>
                <h1 className={styles.vignettes}>———————————————</h1>
            </div>
            </center>
            </div>
            <Projects />
            <AboutMe />
            <Technologies/>
        </div>
    )
}

export default Home




/*

import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Technologies from '../Technologies/Technologies'
import styles from './Home.module.css'
const Home = () => {

    return (
        <div>
            

            <div className={styles.container}>
                <div className={styles.containerJ}>
                <h1 className={styles.name}>José Franco</h1>
                <h2 className={styles.profession}>Desarrollador Full Stack</h2>
                <a href="https://www.linkedin.com/in/osemanuelfrancoalzate" target="_blank" rel="noopener noreferrer">
                <img className={styles.linkendin} alt="Linkendin" src='logo-linkendin.png' />
                </a>
               <a href="https://github.com/JoseManuelFrancoAlzate  " target="_blank" rel="noopener noreferrer">
                <img className={styles.github} alt="GitHub" src='logo-github.jpg' />
                </a>
                <a href="https://wa.me/573229227773" target="_blank" rel="noopener noreferrer">
                <img className={styles.whatsapp} alt="Whatsapp" src="logo-whatsapp.png" />
                </a>
                <img className={styles.profilePicture} alt="profilePicture" src="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-cono-perfil-usuario-avatar-jovenes_118339-4402.jpg" />       
                </div> 
                <center>
            <div className={styles.containerI}>
                <h1 className={styles.vignettes}>———————————————</h1>
                <h1 className={styles.I}>Sobre Mi</h1>
                <p className={styles.myDescription}>Full stack developer con aproximadamente un año y medio de experiencia en el desarrollo de aplicaciones web. Actualmente, estudio de forma autodidacta y trabajo en proyectos individuales y grupales.</p>
                <h1 className={styles.vignettes}>———————————————</h1>
            </div>
            </center>
            </div>
            <Projects />
            <AboutMe />
            <Technologies/>
        </div>
    )
}

export default Home
*/

//https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-cono-perfil-usuario-avatar-jovenes_118339-4402.jpg
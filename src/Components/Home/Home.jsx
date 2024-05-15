import Projects from '../Projects/Projects'
import styles from './Home.module.css'

const Home = ()=>{
return(
    <div>
        <div className={styles.container}>
<h1 className={styles.name}>José Franco</h1>
<h2 className={styles.profession}>Desarrollador Full Stack</h2>
<img className={styles.linkendin} alt ="Linkendin" src='logo-linkendin.png'/>
<img className={styles.github} alt ="GitHub" src='logo-github.jpg'/>
<img className={styles.whatsapp} alt="Whatsapp" src="logo-whatsapp.png"/>
<img className={styles.profilePicture} alt="profilePicture" src="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-cono-perfil-usuario-avatar-jovenes_118339-4402.jpg"/>
</div>
<div className={styles.containerI}>
<h1 className={styles.vignettes}>———————————————</h1>
<h1 className={styles.I}>Sobre Mi</h1>
<p className={styles.myDescription}>Full stack developer con aproximadamente un año y medio de experiencia en el desarrollo de aplicaciones web. Actualmente, estudio de forma autodidacta y trabajo en proyectos individuales y grupales.</p>
<h1 className={styles.vignettes}>———————————————</h1>
</div>
<Projects/>
</div>
)
}

export default Home
import styles from './Projects.module.css'
import ProjectsCards from './ProjectsCards/ProjectsCards'

const Projects =()=>{
    return(
        <div>
            <div className={styles.containerProjects}>
            <h1 className={styles.titleProject}>Projects</h1>
            </div>
            <ProjectsCards
            name="Countries"
            image="countries.png"/>
            
        </div>
    )
}

export default Projects
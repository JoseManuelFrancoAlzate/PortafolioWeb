import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import ProjectsCards from './ProjectsCards/ProjectsCards'
import { arrayProjects } from './infoProjects'
const Projects = () => {

    return (
        <div>
            <div className={styles.containerProjects}>
                <h1 className={styles.titleProject}>Proyectos</h1>
            </div>
            <div className={styles.containerCardsProjects}>
                {
                    arrayProjects.map((projects) => {
                        return (
                            <Link to={`projects/${projects.id}`} className={styles.link}>
                                <ProjectsCards
                                    name={projects.name}
                                    imageUrl={projects.image}
                                    description={projects.description}
                                    technologies={projects.technologies} />
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Projects
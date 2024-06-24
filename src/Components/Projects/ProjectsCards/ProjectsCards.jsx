import styles from './ProjectsCards.module.css';

const ProjectsCards = (project) => {
    return (
        <div key={project.name} className={styles.card}>
            <img src={project.imageUrl} alt={project.name} className={styles.cardImage} />
            <div className={styles.cardHeader}><h2 className={styles.title}>{project.name}</h2></div>
            <div className={styles.cardBody}>
                <p className={styles.description}>{project.description}</p>
                <p><strong>Tecnologías:</strong> {project.technologies.join(', ')}</p>
            </div>
        </div>
    );
};

export default ProjectsCards;


//Shift + Alt + F
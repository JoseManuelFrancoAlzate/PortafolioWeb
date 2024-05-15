import styles from './ProjectsCards.module.css'

const ProjectsCards = (props)=>{
    return(
        <div>
        <div className={styles.CardContainer}>
        <h1 className={styles.cardName}>{props.name}</h1>
        <img alt={props.name} className={styles.img} src={props.image}/>
        <div className={styles.containerText}>
        <p className={styles.text}>jj</p>
        </div>
        </div>
            </div>
    )
}


export default ProjectsCards
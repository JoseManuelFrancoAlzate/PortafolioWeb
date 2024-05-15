import styles from "./Technologies.module.css"
import CardTechnologies from "./CardTechnologies/CardTechnologies"

const Technologies =()=>{
return(
    <div>
        <div className={styles.containerTechnologies}>
        <h1 className={styles.title}>Tecnologias</h1>
     </div>
     <CardTechnologies/>
    </div>
)
}


export default Technologies
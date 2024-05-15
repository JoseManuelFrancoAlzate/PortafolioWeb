import styles from './CardTechnologies.module.css'

const CardTechnologies= (props)=>{
return(
    <div>
<div className={styles.CardContainer}>
<h1 className={styles.title}>{props.name}</h1>
<img alt={props.name} className={styles.img} src={props.image}/>
</div>
    </div>
)
}


export default CardTechnologies

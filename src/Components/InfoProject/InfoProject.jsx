import styles from './InfoProject.module.css';
import { Link } from "react-router-dom"
import { useParams } from 'react-router';
import { idProject } from '../Projects/infoProjects';
const InfoProject = () => {
    const { id } = useParams();
    const number = Number(id);
    const resultado = idProject(number);

    console.log(number);
    console.log(resultado);
    console.log(id);

    return (
        <div className={styles.container}>
            <div className={styles.containerButton}>
                <Link to='/'>
                 <img  className={styles.button} alt="atras" src="https://cdn-icons-png.flaticon.com/512/4227/4227702.png"/>
                </Link>
            </div>
            <div className={styles.containerElements}>
                <h1 className={styles.title}>
                    {resultado.name}
                </h1>
                <div className={styles.containerDescription}>
                    <p>{resultado.description}</p>
                </div>
                <img alt={resultado.name} src={resultado.image} className={styles.imageProject} />

            </div>
        </div>
    );
}

export default InfoProject;

//paddingTop: '60px' 
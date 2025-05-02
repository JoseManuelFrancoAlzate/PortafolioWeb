import styles from './InfoProject.module.css';
import { Link } from "react-router-dom"
import { useParams } from 'react-router';
import { idProject } from '../Projects/infoProjects';
import imgCalendarNaranja from "../../Images/calendarioNaranja.png"
import imgComputadorNaranja from "../../Images/computadorNaranja.png"
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
                <div className={styles.imgH1}>
                <img alt={resultado.name} src={resultado.image} className={styles.imageProject} />
                <div className={styles.contentTips}>
                  <div className={styles.contentTipsTwo}>
               <img className={styles.imgNaranja} src={imgCalendarNaranja} alt="calendarioNaranja"/><h5>{resultado.fecha}</h5>
               </div>
               <div className={styles.contentTipsTwo}>
               <img className={styles.imgNaranja} src={imgComputadorNaranja} alt="computadorNaranja"/><h5>{resultado.ocupacion}</h5>
               </div>
               </div>
                </div>
                <div className={styles.containerDescription}>
                    <p>{resultado.description}</p>
                </div>
                <div className={styles.containerContent}>
                    <p className={styles.content}>{resultado.content}</p>
                </div>
                <div className={styles.containerFunction}>
                    <h1 className={styles.titleFunctions}>Funcionalidades</h1>
                    <ul className={styles.functions}>
                    {resultado.functionsTitle.map((title, index) => (
                      <li key={index}><strong className={styles.titleFunction}>{title}</strong>{resultado.functions[index]}</li> 
                     ))}
                 </ul>
            <h1 className={styles.titleFunctions}>Tecnologias</h1>
            <div>
            <table className={styles.table}>
  <thead>
    <tr>
      <th className={styles.th}>Tecnología</th>
      <th className={styles.th}>Uso / Implementación</th>
    </tr>
  </thead>
  <tbody>
    {resultado.technologiesTable.map((tecnologia, index) => (
      <tr key={index}>
        <td className={styles.td}>{tecnologia}</td>
        <td  className={styles.td}>{resultado.descriptionTechnologies[index]}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
                <h1 className={styles.titleFunctions}>Vista previa (Screenshots)</h1>
              <img className={styles.gif} src={resultado.gif} alt={resultado.name}/>
                <div className={styles.containerImages}>
                {resultado.images.map((image, index)=>{
                return <img className={styles.images} src={image} alt={index} />
                })}
            </div>
            </div>
            </div>
        </div>
    );
}

export default InfoProject;

//paddingTop: '60px' 
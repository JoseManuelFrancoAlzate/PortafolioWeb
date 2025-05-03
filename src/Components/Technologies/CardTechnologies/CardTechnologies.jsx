import React from 'react';
import styles from './CardTechnologies.module.css';

const CardTechnologies = ({ name, technologies = [] }) => {
  return (
<div className={styles.CardContainer}>
  <h1 className={styles.title}>{name}</h1>
  <div className={styles.containerTechs}>
    {technologies.map((tech, index) => (
      <div key={index} className={styles.techItem}>
        <img src={tech.image} className={styles.img} alt={index}/>
        <p className={styles.nameTechnologies}>{tech.name}</p>
      </div>
    ))}
  </div>
</div>
  );
};

export default CardTechnologies;

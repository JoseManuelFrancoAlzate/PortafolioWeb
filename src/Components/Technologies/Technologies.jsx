import React from 'react';
import styles from "./Technologies.module.css";
import CardTechnologies from "./CardTechnologies/CardTechnologies";
//Imagenes de las tecnologias
//Imagenes de las tecnologias
import imageHtml from "../../Images/imgTecnologias/HTML.png"
import imageCss from "../../Images/imgTecnologias/CSS.svg"
import imageReact from "../../Images/imgTecnologias/REACT.png"
import imageNext from "../../Images/imgTecnologias/NEXT.svg"
import imageRedux from "../../Images/imgTecnologias/REDUX.svg"
import imageTailwind from "../../Images/imgTecnologias/TAILWIND.png"
import imageJavascript from "../../Images/imgTecnologias/JAVASCRIPT.webp"
import imageNode from "../../Images/imgTecnologias/NODE.svg"
import imageExpress from "../../Images/imgTecnologias/EXPRESS.webp"
import imageSequelize from "../../Images/imgTecnologias/SEQUELIZE.png"
import imageMongodb from "../../Images/imgTecnologias/MONGODB.png"
import imagePostgresSql from "../../Images/imgTecnologias/POSTGRESQL.png"
import imagePython from "../../Images/imgTecnologias/PYTHON.png"
import imageCsharp from "../../Images/imgTecnologias/Csharp.png"
import imageGit from "../../Images/imgTecnologias/GIT.png"
import imageNpm from "../../Images/imgTecnologias/NPM.png"
import imageGitHub from "../../Images/imgTecnologias/GITHUB.png"
import imageTerminal from "../../Images/imgTecnologias/TERMINAL.png"
import imageVS from "../../Images/imgTecnologias/VS.png"

const Technologies = () => {
  const infoTechnologies = [
    {
      name: 'Front-end',
      technologies: [
        {
          name: 'HTML',
          image: imageHtml
        },
        {
          name: 'CSS',
          image: imageCss
        },
        {
          name: 'React',
          image: imageReact
        },
        {
         name: 'Next.js',
         image: imageNext
        },
        {
          name: 'Redux',
          image: imageRedux
        },
        {
          name: 'Tailwind',
          image: imageTailwind
        },
        {
          name: 'JavaScript',
          image: imageJavascript
        }
      ],

    },
    {
      name: 'Back-end',
      technologies: [
        {
          name: 'Node.js',
          image: imageNode
        },
        {
          name:'Express.js',
          image:imageExpress
        },
        {
          name:'Sequelize',
          image:imageSequelize
       },
       {
        name:'Mongodb',
        image: imageMongodb
       },
      {
        name:'postgreSQL',
        image: imagePostgresSql
      }

      ]
    }, 
    {
      name: 'Aprendiendo',
      technologies: [
        {
          name: 'Python',
          image: imagePython
        },
        {
          name: "C#",
          image: imageCsharp
        },
      ]
    },
    {
      name: 'Herramientas',
      technologies: [
        {
          name:'Git',
          image: imageGit
        },
        {
          name: 'NPM',
          image: imageNpm
        },
        {
          name:'GitHub',
          image:imageGitHub
        },
        {
          name:'Terminal',
          image: imageTerminal
        },
        {
          name:'vsCode',
          image:imageVS
        }
 
      ]
    }

    // Agrega más categorías de tecnologías según sea necesario
  ];

  return (
    <div className={styles.container}>
      <div className={styles.containerTechnologies}>
        <h1 className={styles.title}>Habilidades Tecnicas</h1>
      </div>
      <div className={styles.containerCardsTechnologies}>
        {infoTechnologies.map((technologie, index) => (
          <CardTechnologies
            key={index}
            name={technologie.name}
            technologies={technologie.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;

import React from 'react';
import styles from "./Technologies.module.css";
import CardTechnologies from "./CardTechnologies/CardTechnologies";

const Technologies = () => {
  const infoTechnologies = [
    {
      name: 'Front-end',
      technologies: [
        {
          name: 'HTML',
          image: 'https://cdn-icons-png.flaticon.com/256/174/174854.png'
        },
        {
          name: 'CSS',
          image: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
        },
        {
          name: 'React',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
        },
        {
         name: 'Next.js',
         image: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
        },
        {
          name: 'Redux',
          image: 'https://www.bairesdev.com/wp-content/uploads/2020/07/redux.svg'
        },
        {
          name: 'Tailwind',
          image: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png'
        },
        {
          name: 'JavaScript',
          image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'
        }
      ],

    },
    {
      name: 'Back-end',
      technologies: [
        {
          name: 'Node.js',
          image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
        },
        {
          name:'Express.js',
          image:'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'
        },
        {
          name:'Sequelize',
          image:'https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png'
       },
       {
        name:'Mongodb',
        image:'https://static-00.iconduck.com/assets.00/mongodb-original-icon-921x2048-hvrb89lu.png'
       },
      {
        name:'postgreSQL',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png'
      }

      ]
    },
    {
      name: 'Aprendiendo',
      technologies: [
        {
          name: 'Python',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png'
        },
        {
          name: 'Angular',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
        },
      ]
    },
    {
      name: 'Herramientas',
      technologies: [
        {
          name:'Git',
          image:'https://victorroblesweb.es/wp-content/uploads/2018/04/git.png'
        },
        {
          name: 'NPM',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png'
        },
        {
          name:'GitHub',
          image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png'
        },
        {
          name:'Terminal',
          image:'https://static-00.iconduck.com/assets.00/terminal-icon-1024x897-viembxtc.png'
        },
        {
          name:'vsCode',
          image:'https://static-00.iconduck.com/assets.00/visual-studio-code-icon-2048x2026-9ua8vqiy.png'
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

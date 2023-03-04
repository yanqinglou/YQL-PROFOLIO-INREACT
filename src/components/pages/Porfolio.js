import React from 'react';
import ProjectCard from './Project Card';

const styles=
{
  container: {
    padding:'1em',
  },
  projectContainer:{
    display:'flex',
    justifyContent: 'space-around',
    flexWrap:'wrap'
  }
}
const projectArray=[
  {
    name:'Save your Seat',
    link:'https://make-reservation.herokuapp.com/',
    img:'https://ik.imagekit.io/rt5o187rd/saveyourseat.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677912442999'
  },
  {
    name:'Techirping',
    link:'https://tekchirp2023.herokuapp.com/',
    img:'https://ik.imagekit.io/rt5o187rd/Techirp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677912442723'
  },
  {
    name:'Weather Forecast',
    link:'https://yanqinglou.github.io/5DAYS-WEATHER-REPORTED-BY-YQL/',
    img:'https://ik.imagekit.io/rt5o187rd/weatherforecasst.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677912599152'
  },
  {
    name:'Boot Camp Quize',
    link:'https://yanqinglou.github.io/BOOTCAMP-QUIZE-YQL-2023/',
    img:'https://ik.imagekit.io/rt5o187rd/Bootcamp_Quize.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677912971745'
  },
]

export default function Porfolio() {
  return (
    <div style={styles.container}>
      <h1>Porfolio</h1>
      <br></br>
      <div style={styles.projectContainer}>
        {projectArray.map(project=><ProjectCard name={project.name} link={project.link} img={project.img}/>)}
      </div>
    </div>
  );
}

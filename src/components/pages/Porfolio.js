import React from 'react';
import ProjectCard from './Project Card';

const styles=
{
  container: {
    padding:'1em',
  },
}
const projectArray=[
  {
    name:'Save your Seat',
    link:'https://make-reservation.herokuapp.com/'
  }
]

export default function Porfolio() {
  return (
    <div style={styles.container}>
      <h1>Porfolio</h1>
      <div>
        <ProjectCard name={projectArray[0].name} link={projectArray[0].link}/>
      </div>
    </div>
  );
}

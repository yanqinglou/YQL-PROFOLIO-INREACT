import React from 'react';

const styles = {
  container: {
     padding:'1em',
   },
 };

 const resumeLink="https://drive.google.com/file/d/1J_vLuDHEyU0WTz43pwR8qlq32ZLzd3Dl/view?usp=sharing"

export default function Resume() {
  return (
    <div style={styles.container}>
      <h1>Resume</h1>
      <br></br>
      <ul>
      <h3>Click here to <a href={resumeLink} target='__blank'>download</a> my resume.</h3>
      </ul>
     <br></br>
     <ul>
      <h3>Developer's proficiencies</h3>
      <li>Javascript</li>
      <li>REACT</li>
      <li>SQL</li>
      <li>MONGO DB</li>
      <li>HTML</li>
      <li>CSS</li>
     </ul>
    </div>
  );
}

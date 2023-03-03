import React from "react";
import GitHub from "../Assets/github.png";
import LinkedIn from "../Assets/linkedin.png";

const styles = {
    footer:{
        display:'flex',
        flexDirection:'column',
        alignItems: "center"
    },
  img: {
    width: "10em",
    padding:'2px'
  },
  p:
  {
    paddingTop:'10px'
  }
};
const githubLink = 'https://github.com/yanqinglou'
const linkedinLink = 'http://linkedin.com/in/yanqing-lou-construction'

export default function Porfolio() {
  return (
    <footer style={styles.footer}>
      <a href={githubLink}  target='_blank'><img src={GitHub} alt="github" style={styles.img}></img></a>
      <a href={linkedinLink}  target='_blank'><img src={LinkedIn} alt="linkedin" style={styles.img} ></img></a>
      <p style={styles.p}>Dedicated to Ray and his standing desk</p>
    </footer>
  );
}

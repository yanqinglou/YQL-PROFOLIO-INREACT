import React from "react";
import GitHub from "../Assets/github.png";

const styles = {
    footer:{
        display:'flex',
        flexDirection:'column',
        alignItems: "center"
    },

  img: {
    width: "10em",
    padding:'1em'
  },
};
const githubLink = 'https://github.com/yanqinglou'

export default function Porfolio() {
  return (
    <footer style={styles.footer}>
      <a href={githubLink}><img src={GitHub} alt="github" style={styles.img} ></img></a>
      <p>Dedicated to Ray and his standing desk</p>
    </footer>
  );
}

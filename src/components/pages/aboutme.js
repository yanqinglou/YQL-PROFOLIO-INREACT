import React from "react";
import img from "../../Assets/aboutmeimg.png";
import "./style.css";

const styles = {
  container: {
    padding: "1em",
  },
  aboutmeImg: {
    height: "300px",
  },
  aboutme: {
    display: "flex",
    alignItems: "center",
  },
  aboutmep: {
  padding:'20px'
  },
  
};

export default function Aboutme() {
  return (
    <div style={styles.container}>
      <h1> About me</h1>
      <br></br>
      <div style={styles.aboutme}>
        <img style={styles.aboutmeImg} src={img}></img>
        <div>
        <p style={styles.aboutmep}>
          My name is Yanqing Lou. I'm currently pursuing a cerficate from University of Washington to become a full stack web developer. 3 moths ago, I knew almost nothing about programming and web design. Throughout this program, I have learnt how to write code in Javascript, how to structre a web page in html, how to style a page in css, how to construct data structure in mysql and mongo and how to build a responsive webpage through React. I believe what I have learnt throughout this course will be strong evidence of my learning ability and my problem-solving skills. Most importly, I'm now able to solve issues in both work and life in a computer-thinking way.
        </p>       
         <p style={styles.aboutmep}>Career-wise, I'm inspired to become a product specialist/manager, managint the daily activities of developing/developed product.
          </p>
        </div>
  
      </div>
    </div>
  );
}

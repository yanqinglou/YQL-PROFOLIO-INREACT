import React from 'react';
import Contactform from './Contact Form';

const styles=
{
  container: {
    padding:'1em',
  },
}

export default function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact</h1>
    <Contactform />
    </div>
  );
}

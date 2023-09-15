import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact the Author</h2>
          <p>
            Name: Dr.Sajjad Naqvi
          </p>
          <p>Email: <a href='mailto:sajjadnaqvi9797@gmail.com'>sajjadnaqvi9797@gmail.com</a></p>
          <p>Website: <a href='https://muarif-quran.netlify.app/'>muarif-quran.netlify.app</a></p>
        </div>
        <div className="developer-info">
          <h2>Get in Touch with the Developer</h2>
          <p>
            Name: Safar Abbas
          </p>
          <p>Email: <a href='mailto:safarabbas_2010@hotmail.com'>safarabbas_2010@hotmail.com</a></p>
          <p>Website: <a href='https://safarababs.github.io/safarweb/'>safarababs.github.io/safarweb</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

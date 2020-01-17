import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";

import "./contact.styles.scss";

const Contact = () => (
  <div>
    <img
      className="contact"
      src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
    />
    <article>
      <h1>Thank you for viewing!</h1>
      <p>This is a practice project done with React and Redux.</p>
      <p>Joaquim Ribeiro</p>
    </article>
    <CustomButton
      onClick={() =>
        window.open("https://www.linkedin.com/in/joaquimfribeiro", "_blank")
      }
      isGoogleSignIn
    >
      LinkedIn
    </CustomButton>
  </div>
);

export default Contact;

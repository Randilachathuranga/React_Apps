import React, { useContext } from "react";

import ContactForm from "../Components/ContactForm";
import { UserName } from "../Components/Homecomp";

const Contact = ({ isLightmode }) => {
  const user = useContext(UserName);

  return (
    <div>
      <ContactForm isLightmode={isLightmode} />
      <p> {user}</p>
    </div>
  );
};

export default Contact;

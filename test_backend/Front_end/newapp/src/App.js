import "./App.css";

import Contact from "./Contacts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import felix from "./images/felix.png";
import fluffykins from "./images/fluffykins.png";
import pumpkin from "./images/pumpkin.png";
import { useNavigate } from 'react-router-dom';
import whiskerson from "./images/mr-whiskerson.png";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <br />
      <div className="contacts">
        <Contact
          img={whiskerson}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={fluffykins}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img={felix}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img={pumpkin}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
        <Contact
          img={pumpkin}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
        
      </div>
      <Footer />

      <div>
        <form>
          <br />
          <br />
          <label htmlFor="submit-input">Users</label>
          <button type="button" onClick={() => navigate('/users')}>Go to Users</button>
        </form>
      </div>
    </div>
  );
}

export default App;

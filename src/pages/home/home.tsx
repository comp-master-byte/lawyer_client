import React from "react";
import AboutUs from "./components/about-us/about-us";
import Advantages from "./components/advantages/advantages";
import Themes from "./components/themes/themes";
import Contacts from "./components/contacts/contacts";
import Primary from "./components/primary/primary";

const Home: React.FC = () => {
    return (
        <div>
          <Primary />
          <AboutUs />
          <Advantages />
          <Themes />
          <Contacts />
        </div>
    );
};

export default Home;
import React from "react";
import Navigation from "widgets/navigation/navigation";
import Footer from "widgets/footer/footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Advantages from "./components/Advantages/Advantages";
import Themes from "./components/Themes/Themes";
import Contacts from "./components/Contacts/Contacts";
import Primary from "./components/primary/primary";

const Home: React.FC = () => {
    return (
        <div>
          <Navigation />
          <Primary />
          <AboutUs />
          <Advantages />
          <Themes />
          <Contacts />
          <Footer />
        </div>
    );
};

export default Home;
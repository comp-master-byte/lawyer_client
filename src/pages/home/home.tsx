import React from "react";
import Navigation from "widgets/navigation/navigation";
import Footer from "widgets/footer/footer";
import AboutUs from "./components/about-us/about-us";
import Advantages from "./components/advantages/advantages";
import Themes from "./components/themes/themes";
import Contacts from "./components/contacts/contacts";
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
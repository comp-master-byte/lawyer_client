import React from "react";
import Navigation from "widgets/navigation/navigation";
import Footer from "widgets/footer/footer";
import PrimaryView from "./components/Primary/PrimaryView";
import AboutUs from "./components/AboutUs/AboutUs";
import Advantages from "./components/Advantages/Advantages";
import Themes from "./components/Themes/Themes";
import Contacts from "./components/Contacts/Contacts";

const Home: React.FC = () => {
    return (
        <div>
          <Navigation />
          <PrimaryView />
          <AboutUs />
          <Advantages />
          <Themes />
          <Contacts />
          <Footer />
        </div>
    );
};

export default Home;
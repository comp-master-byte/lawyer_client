import React from "react";
import Navigation from "../../widgets/Navigation/Navigation";
import PrimaryView from "../../widgets/Home/Primary/PrimaryView";
import AboutUs from "../../widgets/Home/AboutUs/AboutUs";
import Advantages from "../../widgets/Home/Advantages/Advantages";
import Themes from "../../widgets/Home/Themes/Themes";
import Contacts from "../../widgets/Home/Contacts/Contacts";
import Footer from "../../widgets/Footer/Footer";

const App: React.FC = () => {
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

export default App;

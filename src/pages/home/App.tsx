import React from "react";
import Navigation from "../../widgets/Navigation/Navigation";
import PrimaryView from "../../widgets/Home/Primary/PrimaryView";
import AboutUs from "../../widgets/Home/AboutUs/AboutUs";
import Advantages from "../../widgets/Home/Advantages/Advantages";
import Themes from "../../widgets/Home/Themes/Themes";

function App() {
  return (
    <div>
      <Navigation />
      <PrimaryView />
      <AboutUs />
      <Advantages />
      <Themes />
    </div>
  );
}

export default App;

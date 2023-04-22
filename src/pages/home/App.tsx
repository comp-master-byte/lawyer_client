import React from "react";
import Navigation from "../../widgets/Navigation/Navigation";
import PrimaryView from "../../widgets/home/primary/PrimaryView";
import AboutUs from "../../widgets/home/aboutUs/AboutUs";
import Advantages from "../../widgets/home/advantages/Advantages";

function App() {
  return (
    <div>
      <Navigation />
      <PrimaryView />
      <AboutUs />
      <Advantages />
    </div>
  );
}

export default App;

import React from "react";
import Navigation from "../../widgets/Navigation/Navigation";
import PrimaryView from "../../widgets/home/primary/PrimaryView";
import AboutUs from "../../widgets/home/aboutUs/AboutUs";

function App() {
  return (
    <div>
      <Navigation />
      <PrimaryView />
      <AboutUs />
    </div>
  );
}

export default App;

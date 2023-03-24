import React from "react";
import Navigation from "./components/Navigation/Navigation";
import PrimaryView from "./modules/PrimaryView";
import "./styles/global.scss";
import MyButton from "./UI/MyButton/MyButton";

function App() {
  return (
    <div>
      <Navigation />
      <PrimaryView />
    </div>
  );
}

export default App;

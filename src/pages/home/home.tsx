import React from "react";
import AboutUs from "./components/about-us/about-us";
import Advantages from "./components/advantages/advantages";
import Themes from "./components/themes/themes";
import Contacts from "./components/contacts/contacts";
import Primary from "./components/primary/primary";
import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {
    return (
        <div>
          <Helmet>
                <title>Юра прав - твой цифровой юридический помощник</title>
                <meta name="description" content='Задайте свой вопрос бесплатному помощнику Юре или составьте обращение к юристу' />
                <link rel="canonical" href={'/'} />
          </Helmet>
          <Primary />
          <AboutUs />
          <Advantages />
          <Themes />
          <Contacts />
        </div>
    );
};

export default Home;
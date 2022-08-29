import React from "react";

import Card from "./card/Card";
import AccordianHome from "./accordion/AccordianHome";
import HomeHeader from "./header/HomeHeader";

const Home = () => {
  const name = [
    {
      name: "Anurag",
      sem: "4th",
    },
    {
      name: "Divya",
      sem: "4th",
    },
    {
      name: "Pranjal",
      sem: "6th",
    },
    {
      name: "Hiresh",
      sem: "8th",
    },
    {
      name: "Monica",
      sem: "2th",
    },
    {
      name: "Anjali",
      sem: "8th",
    },
    {
      name: "Tushar",
      sem: "Fail",
    },
    {
      name: "Komal",
      sem: "Pass out",
    },
  ];

  return (
    <div>
        <HomeHeader />
    </div>
  );
};

export default Home;

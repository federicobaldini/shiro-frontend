import React from "react";

import Showcase from "../components/Showcase";
import MenuList from "../components/MenuList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Showcase />
      <MenuList />
    </div>
  );
};

export default Home;

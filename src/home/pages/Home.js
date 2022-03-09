import React from "react";

import Carousel from "../components/Carousel";
import MenuList from "../components/MenuList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <MenuList />
    </div>
  );
};

export default Home;

import React from "react";

import Showcase from "../components/Showcase";
import MenuList from "../components/MenuList";
import "./Home.css";

const images = [
  {
    id: 1,
    path: "https://images.wallpaperscraft.com/image/single/sofa_furniture_interior_design_style_comfort_70000_3840x2160.jpg",
    color: "pink",
  },
  {
    id: 2,
    path: "https://images.wallpaperscraft.com/image/single/interior_yellow_office_121457_3840x2160.jpg",
    color: "yellow",
  },
  {
    id: 3,
    path: "https://images.wallpaperscraft.com/image/single/balcony_sofas_interior_design_apartment_room_suite_sea_ocean_landscape_penthouse_desk_tv_31421_3840x2160.jpg",
    color: "red",
  },
  {
    id: 4,
    path: "https://images.wallpaperscraft.com/image/single/sofa_furniture_interior_design_style_comfort_70000_3840x2160.jpg",
    color: "blue",
  },
  {
    id: 5,
    path: "https://images.wallpaperscraft.com/image/single/interior_yellow_office_121457_3840x2160.jpg",
    color: "green",
  },
];

const Home = () => {
  return (
    <div className="home">
      <Showcase images={images} />
      <MenuList />
    </div>
  );
};

export default Home;

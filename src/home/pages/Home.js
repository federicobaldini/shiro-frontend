import React from "react";

import Carousel from "../components/Carousel";
import MenuList from "../components/MenuList";
import Card from "../../shared/components/UI/Card";
import "./Home.css";

const images = [
  {
    id: 1,
    path: "https://images.wallpaperscraft.com/image/single/sofa_furniture_interior_design_style_comfort_70000_3840x2160.jpg",
  },
  {
    id: 2,
    path: "https://images.wallpaperscraft.com/image/single/interior_yellow_office_121457_3840x2160.jpg",
  },
  {
    id: 3,
    path: "https://images.wallpaperscraft.com/image/single/balcony_sofas_interior_design_apartment_room_suite_sea_ocean_landscape_penthouse_desk_tv_31421_3840x2160.jpg",
  },
  {
    id: 4,
    path: "https://images.wallpaperscraft.com/image/single/sofa_furniture_interior_design_style_comfort_70000_3840x2160.jpg",
  },
  {
    id: 5,
    path: "https://images.wallpaperscraft.com/image/single/interior_yellow_office_121457_3840x2160.jpg",
  },
  {
    id: 6,
    path: "https://images.wallpaperscraft.com/image/single/balcony_sofas_interior_design_apartment_room_suite_sea_ocean_landscape_penthouse_desk_tv_31421_3840x2160.jpg",
  },
];

const Home = () => {
  return (
    <div className="home">
      <Carousel show={3} infiniteLoop={true} images={images}>
      </Carousel>
      <MenuList />
    </div>
  );
};

export default Home;

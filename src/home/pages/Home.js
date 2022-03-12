import React from "react";

import Showcase from "../components/Showcase";
import MenuList from "../components/MenuList";
import ProductList from "../../products/components/ProductList";
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

const products = [
  {
    id: 1,
    path: "https://www.pngarts.com/files/3/Chair-PNG-Image-With-Transparent-Background.png",
    description: "Lorem ipsum dolor sit amet, consectetur",
    color: "pink",
  },
  {
    id: 2,
    path: "https://jacqueshitier.com/wp-content/uploads/2021/01/jacques-hitier-low-coffee-table-basse-n-34.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur",
    color: "yellow",
  },
  {
    id: 3,
    path: "https://i.pinimg.com/originals/ff/4b/36/ff4b36b7126bcde9f47d48cd84c0d64c.png",
    description: "Lorem ipsum dolor sit amet, consectetur",
    color: "red",
  },
];

const Home = () => {
  return (
    <div className="home">
      <Showcase images={images} />
      <ProductList products={products} />
    </div>
  );
};

export default Home;

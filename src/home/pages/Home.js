import React from "react";

import Showcase from "../components/Showcase";
import ProductList from "../../products/components/ProductList";
import SearchBar from "../../shared/components/searchbar/SearchBar";
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
];

const products = [
  {
    id: 1,
    imagePath:
      "https://www.pngarts.com/files/3/Chair-PNG-Image-With-Transparent-Background.png",
    name: "Black chair",
    price: "60$",
    releaseDate: "2022-03-01T00:00:00.000Z",
  },
  {
    id: 2,
    imagePath:
      "https://jacqueshitier.com/wp-content/uploads/2021/01/jacques-hitier-low-coffee-table-basse-n-34.jpg",
    name: "Wooden table",
    price: "150$",
    releaseDate: "2022-03-01T00:00:00.000Z",
  },
  {
    id: 3,
    imagePath:
      "https://i.pinimg.com/originals/ff/4b/36/ff4b36b7126bcde9f47d48cd84c0d64c.png",
    name: "Grey sofa",
    price: "400$",
    releaseDate: "2022-02-01T00:00:00.000Z",
  },
];

const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <Showcase images={images} animation={false} />
      <div className="home-products__title">
        Choose your{" "}
        <span style={{ color: "#e74c3c" }}>new</span>{" "}
        product
      </div>
      <div className="home-products__title-line"></div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;

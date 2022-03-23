import React from "react";

import ProductList from "../components/ProductList";
import "./Products.css";

const products = [
  {
    id: 1,
    imagePath:
      "https://www.pngarts.com/files/3/Chair-PNG-Image-With-Transparent-Background.png",
    name: "Black chair",
    price: 60,
    releaseDate: "2022-03-01T00:00:00.000Z",
    typeId: 1,
    shortDescription: "Lorem ipsum dolor sit amet.",
    averageRating: 2.9,
  },
  {
    id: 2,
    imagePath:
      "https://jacqueshitier.com/wp-content/uploads/2021/01/jacques-hitier-low-coffee-table-basse-n-34.jpg",
    name: "Wooden table",
    price: 150,
    releaseDate: "2022-03-01T00:00:00.000Z",
    typeId: 2,
    shortDescription: "Lorem ipsum dolor sit amet.",
    averageRating: 1.7,
  },
  {
    id: 3,
    imagePath:
      "https://i.pinimg.com/originals/ff/4b/36/ff4b36b7126bcde9f47d48cd84c0d64c.png",
    name: "Grey sofa",
    price: 400,
    releaseDate: "2022-03-01T00:00:00.000Z",
    typeId: 3,
    shortDescription: "Lorem ipsum dolor sit amet.",
    averageRating: 4.3,
  },
];

const categories = [
  { id: 1, name: "chairs", imagePath: "" },
  { id: 2, name: "tables", imagePath: "" },
  { id: 3, name: "sofas", imagePath: "" },
];

const Products = () => {
  const type = false;

  return (
    <div className="products">
      {type ? (
        categories.map((category) => {
          return (
            <React.Fragment key={category.id}>
              <div className="products__title">
                {category.name.toUpperCase()}
              </div>
              <ProductList
                products={products.filter((p) => p.typeId === category.id)}
              />
            </React.Fragment>
          );
        })
      ) : (
        <React.Fragment>
          <div className="products__title">Discover our products</div>
          <ProductList products={products} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Products;

import { useState } from "react";

export const useCart = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([product, ...products]);
  };

  const removeProduct = (productId) => {
    let tempProducts = [...products];
    const index = tempProducts.findIndex((p) => p.id === productId);
    tempProducts.splice(index, 1);
    setProducts(tempProducts);
  };

  return { products, addProduct, removeProduct };
};

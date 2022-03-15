import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorModal from "../../shared/components/ui/ErrorModal";
import LoadingSpinner from "../../shared/components/ui/LoadingSpinner";
import Card from "../../shared/components/ui/Card";
import Button from "../../shared/components/form/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);

  const productId = useParams().productId;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = {
          products: [
            {
              id: 2,
              imagePath:
                "https://jacqueshitier.com/wp-content/uploads/2021/01/jacques-hitier-low-coffee-table-basse-n-34.jpg",
              name: "Wooden table",
              price: "150$",
              releaseDate: "2022-03-01T00:00:00.000Z",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              colors: [
                { name: "red", code: "red" },
                { name: "green", code: "green" },
              ],
              sizes: [
                { name: "M", value: "M" },
                { name: "S", value: "S" },
              ],
              quantity: 10,
            },
          ],
        };
        /*
        const data = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/products/" + productId
        );
        */
        setLoadedProducts(data.products);
      } catch (err) {}
    };

    fetchPlaces();
  }, [sendRequest, productId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading ? (
        <div className="center">
          <LoadingSpinner />
        </div>
      ) : (
        loadedProducts[0] && (
          <Card className="product-detail">
            <div className="product-detail__image-container">
              <img
                className="product-detail__image"
                src={loadedProducts[0].imagePath}
                alt="product"
              />
            </div>
            <div className="product-detail__info">
              <div className="product-detail__name">
                {loadedProducts[0].name.toUpperCase()}
              </div>
              <div className="product-detail__price">
                {loadedProducts[0].price}
              </div>
              <div className="product-detail__description">
                {loadedProducts[0].description}
              </div>
              <form className="product-detail__form" id="orderform">
                <div className="product-detail__colors">
                  <select name="Colors" id="colors">
                    {loadedProducts[0].colors.map((color) => {
                      return (
                        <option key={color.code} value={color.code}>
                          {color.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="product-detail__sizes">
                  <select name="Sizes" id="sizes">
                    {loadedProducts[0].sizes.map((size) => {
                      return (
                        <option key={size.value} value={size.value}>
                          {size.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="product-detail__quantity">
                  <select name="Quantity" id="quantity">
                    <option value={1}>1</option>
                    {loadedProducts[0].quantity > 1 && (
                      <option value={2}>2</option>
                    )}
                    {loadedProducts[0].quantity > 2 && (
                      <option value={3}>3</option>
                    )}
                  </select>
                </div>
                <Button className="product-detail__button">ADD TO CART</Button>
                <Button className="product-detail__button">BUY NOW</Button>
              </form>
            </div>
          </Card>
        )
      )}
    </React.Fragment>
  );
};

export default ProductDetail;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorModal from "../../shared/components/ui/ErrorModal";
import LoadingSpinner from "../../shared/components/ui/LoadingSpinner";
import Card from "../../shared/components/ui/Card";
import Button from "../../shared/components/form/Button";
import ColorSelector from "../components/ColorSelector";
import CustomSelector from "../components/CustomSelector";
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              colors: [
                { name: "blue sky", code: "#5DADE2" },
                { name: "yellow lemon", code: "#F7DC6F" },
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
              <form className="product-detail__form">
                <ColorSelector
                  className="product-detail__colors"
                  colors={loadedProducts[0].colors}
                />
                <div className="product-detail__select-container">
                  <CustomSelector
                    className="product-detail__select"
                    label="Size"
                    items={loadedProducts[0].sizes}
                  />
                  <CustomSelector
                    className="product-detail__select"
                    label="Quantity"
                    items={[
                      { name: 1, value: 1 },
                      { name: 2, value: 2 },
                      { name: 3, value: 3 },
                    ]}
                  />
                </div>
                <div className="product-detail-button-container">
                  <Button className="product-detail__button">
                    ADD TO CART
                  </Button>
                  <Button className="product-detail__button">BUY NOW</Button>
                </div>
              </form>
            </div>
          </Card>
        )
      )}
    </React.Fragment>
  );
};

export default ProductDetail;

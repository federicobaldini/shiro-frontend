import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorModal from "../../shared/components/ui/ErrorModal";
import LoadingSpinner from "../../shared/components/ui/LoadingSpinner";
import ProductDetailOverview from "../components/ProductDetailOverview";
import ProductDetailInfo from "../components/ProductDetailInfo";
import ProductShippingInfo from "../components/ProductShippingInfo";
import ProductReviewsInfo from "../components/ProductReviewsInfo";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./Product.css";

const Product = () => {
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
              imagesPath: [
                "https://jacqueshitier.com/wp-content/uploads/2021/01/jacques-hitier-low-coffee-table-basse-n-34.jpg",
                "https://www.pngarts.com/files/3/Chair-PNG-Image-With-Transparent-Background.png",
                "https://i.pinimg.com/originals/ff/4b/36/ff4b36b7126bcde9f47d48cd84c0d64c.png",
              ],
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
        <div className="product">
          {loadedProducts[0] && (
            <ProductDetailOverview product={loadedProducts[0]} />
          )}
          <div className="product-info">
            <div className="product-info__shipping">
              <ProductShippingInfo />
            </div>
            <div className="product-info__details">
              <ProductDetailInfo />
            </div>
            <div className="product-info__reviews">
              <ProductReviewsInfo />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Product;

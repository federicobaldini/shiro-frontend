import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorModal from "../../shared/components/ui/ErrorModal";
import LoadingSpinner from "../../shared/components/ui/LoadingSpinner";
import ProductDetail from "../components/ProductDetail";
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
        loadedProducts[0] && <ProductDetail product={loadedProducts[0]} />
      )}
    </React.Fragment>
  );
};

export default Product;

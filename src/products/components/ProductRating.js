import React from "react";

import "./ProductRating.css";

const ProductRating = (props) => {
  const { reviews, averageRating } = props;
  const totalReviews = reviews.length;
  const ratings = [1, 2, 3, 4, 5];

  const getAverageReviewsValue = () => {
    let count = 0;
    reviews.forEach((review) => {
      count = count + review.star;
    });
    return Math.round((count / totalReviews) * 10) / 10;
  };

  const getStarPercentage = (rating) => {
    let averageValue = 0;
    if (averageRating) {
      averageValue = averageRating;
    } else {
      averageValue = getAverageReviewsValue();
    }
    if (rating < averageValue + 0.5) {
      return 100;
    }
    return 0;
  };

  return (
    <React.Fragment>
      {ratings.map((rating) => {
        return (
          <div
            key={rating}
            className="product-reviews-info__rating-dot-wrapper"
          >
            <div
              className="product-reviews-info__rating-dot-1"
              style={
                !getStarPercentage(rating)
                  ? { border: "1px solid #d0d3d4" }
                  : {}
              }
            >
              <div
                className="product-reviews-info__rating-dot-2"
                style={{
                  width: getStarPercentage(rating) + "%",
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProductRating;

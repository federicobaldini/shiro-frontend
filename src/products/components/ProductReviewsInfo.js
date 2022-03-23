import React from "react";

import Card from "../../shared/components/ui/Card";
import ProductRating from "./ProductRating";
import "./ProductReviewsInfo.css";

const ProductReviewsInfo = (props) => {
  const { reviews } = props;
  const totalReviews = reviews.length;
  const stars = [5, 4, 3, 2, 1];

  const getReviewsByStar = (star) => {
    let count = 0;
    reviews.forEach((review) => {
      if (review.star === star) {
        count = count + 1;
      }
    });
    return parseInt((100 * count) / totalReviews);
  };

  return (
    <Card className="product-reviews-info">
      <div className="product-reviews-info__rating-container">
        <div className="product-reviews-info__title">RATING</div>
        <div className="product-reviews-info__rating-dot-container">
          <ProductRating reviews={reviews} averageRating={0} />
        </div>
      </div>
      <div className="product-reviews-info__title">
        REVIEWS
        <div className="home-products__title-line"></div>
      </div>
      <div className="product-reviews-info__review-container">
        {stars.map((star) => {
          return (
            <div key={star} className="product-reviews-info__review">
              {star} star
              <div className="product-reviews-info__progress-bar-container">
                <div
                  className="product-reviews-info__progress-bar"
                  style={{ width: getReviewsByStar(star) + "%" }}
                ></div>
              </div>
              {getReviewsByStar(star) + "%"}
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ProductReviewsInfo;

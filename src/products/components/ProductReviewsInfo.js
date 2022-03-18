import React from "react";

import Card from "../../shared/components/ui/Card";
import "./ProductReviewsInfo.css";

const ProductReviewsInfo = (props) => {
  const { reviews } = props;
  const totalReviews = reviews.length;
  const stars = [5, 4, 3, 2, 1];
  const ratings = [1, 2, 3, 4, 5];

  const getReviewsByStar = (star) => {
    let count = 0;
    reviews.forEach((review) => {
      if (review.star === star) {
        count = count + 1;
      }
    });
    return parseInt((100 * count) / totalReviews);
  };

  const getAverageReviewsValue = () => {
    let count = 0;
    reviews.forEach((review) => {
      count = count + review.star;
    });
    return Math.round((count / totalReviews) * 10) / 10;
  };

  const getStarPercentage = (rating) => {
    const averageValue = getAverageReviewsValue();
    if (rating < averageValue + 0.5) {
      return 100;
    }
    return 0;
  };

  return (
    <Card className="product-reviews-info">
      <div className="product-reviews-info__rating-container">
        <div className="product-reviews-info__title">RATING</div>
        <div className="product-reviews-info__rating-dot-container">
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

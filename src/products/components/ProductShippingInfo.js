import React from "react";

import Card from "../../shared/components/ui/Card";
import "./ProductShippingInfo.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ProductShippingInfo = (props) => {
  const { shippingInfo } = props;
  const today = new Date();
  const deliveryDateStart = new Date();
  const deliveryDateEnd = new Date();

  deliveryDateStart.setDate(today.getDate() + shippingInfo.daysRequiredStart);
  deliveryDateEnd.setDate(today.getDate() + shippingInfo.daysRequiredEnd);

  return (
    <Card className="product-shipping-info">
      <div className="product-shipping-info__title">SHIPPING INFO</div>
      <div className="product-shipping-info__detail">
        <div className="product-shipping-info__detail-item">
          Shipping rate:
          <span className="product-shipping-info__detail-rate">
            {shippingInfo.price ? " $" + shippingInfo.price + " " : "FREE "}
          </span>
        </div>
        <div className="product-shipping-info__detail-item">
          Delivery
          {shippingInfo.daysRequiredEnd ? " between " : " "}
          {days[deliveryDateStart.getDay()] +
            ", " +
            months[deliveryDateStart.getMonth()] +
            " " +
            deliveryDateStart.getDate()}
          {shippingInfo.daysRequiredEnd
            ? " and " +
              days[deliveryDateEnd.getDay()] +
              ", " +
              months[deliveryDateEnd.getMonth()] +
              " " +
              deliveryDateEnd.getDate()
            : ""}
        </div>
      </div>
      <div className="product-shipping-info__return-policy">
        {shippingInfo.returnPolicy &&
          "Return policy: Eligible for Return, Refund or Replacement"}
      </div>
    </Card>
  );
};

export default ProductShippingInfo;

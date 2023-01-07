import React from "react";
import "./card.scss";
export default function Card({ id, imageSrc, price, name }) {
  return (
    <div className="card">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="card-content">
        <div className="card-content-name">
          <span>{name}</span>
        </div>
        <div className="card-content-price">
          <span className="symbol">$</span>
          <span>{price}</span>
        </div>
        <div className="card-content-id">
          {" "}
          <span>code: {id}</span>
        </div>
        <div className="card-content-shipping">
          <span>Ships to Albania</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./card.scss";
export default function Card({ id, imageSrc, price, name, sizes }) {
  const [productSize, setSizes] = React.useState(sizes);
  const [selected, setSelected] = React.useState(null);

  const onSizeClick = (event) => {
    const clickedSize = event.target.innerHTML;
    console.log(clickedSize);
    setSelected(clickedSize);
  };

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
        <div className="card-content-sizes">
          <div className="card-content-sizes-inner">
            {sizes.map((el) => {
              console.log(el);
              return (
                <span
                  className={selected === el ? "active" : ""}
                  onClick={onSizeClick}
                  key={el + Math.random()}
                >
                  {el}
                </span>
              );
            })}
          </div>
        </div>
        <div className="card-content-id">
          {" "}
          <span>code: {id}</span>
        </div>
        <div className="card-content-shipping">
          <span>Ships to Albania</span>
        </div>
        <div className="card-content-add-to-card">
            <button>Add</button>
        </div>
      </div>
    </div>
  );
}

import "./Card.css";
import material from "../../assets/images/material.png";

export const Card = ({ title, price, addres, date, image }) => {
  return (
    <a href="./product.html" className="card">
      <div className="card--img">
        <img src={material} alt="search" />
      </div>

      <h5 className="card--title">{title}</h5>

      <strong className="card--price">{price} ₽</strong>
      <div className="card--desc-box">
        <span className="card--desc">{addres}</span>
        <span className="card--desc">{date}</span>
      </div>
    </a>
  );
};

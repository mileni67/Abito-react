import "./Card.css";
import material from "../../assets/images/material.png";
import { Link } from "react-router-dom";

export const Card = ({ id, title, price, addres, date, image }) => {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card--img">
        <img src={material} alt="material" />
      </div>

      <h5 className="card--title">{title}</h5>

      <strong className="card--price">{price} ₽</strong>
      <div className="card--desc-box">
        <span className="card--desc">{addres}</span>
        <span className="card--desc">{date}</span>
      </div>
    </Link>
  );
};

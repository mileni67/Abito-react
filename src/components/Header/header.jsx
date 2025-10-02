import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/burger.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link to={"/"} className="header-logo">
            <img src={logo} alt="logo" />
            <span>Abito</span>
          </Link>
          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>

          <div className="header-burger">
            <img src={burger} alt="burger" />
          </div>
        </div>
      </div>
    </header>
  );
};

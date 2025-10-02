import { Header } from "../components/Header/header";
import searchIcon from "../assets/images/search.svg";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { cardArray } from "../constans";

export const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = () => {
    setProducts(
      cardArray.filter((p) =>
        p.title.includes(searchText || p.price.includes(searchText))
      )
    );
  };

  useEffect(() => {
    setProducts(cardArray);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" value={searchText} onChange={handleSearch} />
              <button
                className="btn btn-primary search-btn"
                onClick={handleSearchArray}
              >
                <img src={searchIcon} alt="search" />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <Outlet context={{ products }} />
      </main>
    </>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Layout } from "./layouts/Layout";

function NotFound() {
  return (
    <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
      Страница не найдена 😢
    </h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Abito-react">
      <Routes>
        {/* Общий Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* / */}
          <Route path="product/:id" element={<Product />} />{" "}
          {/* /product/1, /product/2 */}
          <Route path="*" element={<NotFound />} /> {/* 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

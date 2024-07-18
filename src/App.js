import React from "react";
import "./App.scss";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="container">
      <div className="container__main">
        <h1 className="heading-h1">Desserts</h1>
        <main className="container__menu">
          <Menu />
        </main>
      </div>
      <div className="container__cart">
        <Cart />
      </div>
    </div>
  );
}

export default App;

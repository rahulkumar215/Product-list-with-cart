import React, { useState } from "react";
import "./App.scss";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([
    {
      title: "Classic Triamisu",
      qty: 1,
      price: 5.5,
    },
    {
      title: "Something, I just made up",
      qty: 2,
      price: 5.5,
    },
    {
      title: "Something, I just made up",
      qty: 2,
      price: 5.5,
    },
  ]);

  return (
    <div className="container">
      <div className="container__main">
        <h1 className="heading-h1">Desserts</h1>
        <main className="container__menu">
          <Menu />
        </main>
      </div>
      <div className="container__cart">
        <Cart items={cartItems} />
      </div>
    </div>
  );
}

export default App;

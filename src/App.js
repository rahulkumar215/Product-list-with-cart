import React, { useEffect, useState } from "react";
import "./App.scss";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";

const TempItemCartData = [
  {
    id: "Classic Triamisu",
    title: "Classic Triamisu",
    img: "",
    qty: 1,
    price: 5.5,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const removeCartIcon = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (cartItems.length > 0 && cartItems.some((item) => item.qty === 0)) {
      setCartItems((prevItems) => prevItems.filter((item) => item.qty !== 0));
    }
  }, [cartItems]);

  const handleCartItems = (obj) => {
    setCartItems((prevItems) => {
      if (obj.qty === 0) {
        return prevItems.filter((item) => item.id !== obj.id);
      }

      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === obj.id
      );

      if (existingItemIndex === -1) {
        return [...prevItems, obj];
      }

      const updatedItems = [...prevItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        qty: obj.qty,
      };
      return updatedItems;
    });
  };

  // const handleCartItems = (obj) => {
  //   if (obj.qty === 0 && !cartItems.some((item) => item.id === obj.id)) {
  //     return;
  //   }

  //   if (
  //     cartItems.length === 0 ||
  //     !cartItems.some((item) => item.id === obj.id)
  //   ) {
  //     setCartItems((prev) => [...prev, obj]);
  //   } else {
  //     setCartItems((prev) =>
  //       prev.map((item) =>
  //         item.id === obj.id ? { ...item, qty: obj.qty } : item
  //       )
  //     );
  //   }
  // };

  return (
    <div className="container">
      <div className="container__main">
        <h1 className="heading-h1">Desserts</h1>
        <main className="container__menu">
          <Menu updateCartItems={handleCartItems} items={cartItems} />
        </main>
      </div>
      <div className="container__cart">
        <Cart items={cartItems} removeCartIcon={removeCartIcon} />
      </div>
    </div>
  );
}

export default App;

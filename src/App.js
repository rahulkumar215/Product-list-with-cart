import React, { useEffect, useState } from "react";
import "./App.scss";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import OrderConfirm from "./components/orderconfirm/OrderConfirm";
// import GoToCart from "./components/gotocart/GoToCart";

// const TempItemCartData = [
//   {
//     id: "Classic Triamisu",
//     title: "Classic Triamisu",
//     img: "",
//     qty: 1,
//     price: 5.5,
//   },
// ];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [stopScroll, setStopScroll] = useState(false);
  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  const resetState = () => {
    setCartItems([]);
    setStopScroll(false);
  };

  const removeCartIcon = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

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

  useEffect(() => {
    if (cartItems.length > 0 && cartItems.some((item) => item.qty === 0)) {
      setCartItems((prevItems) => prevItems.filter((item) => item.qty !== 0));
    }
  }, [cartItems]);

  return (
    <>
      <div className="container">
        <div className="container__main">
          <h1 className="heading-h1 mb-2-7">Desserts</h1>
          <main className="container__menu">
            <Menu updateCartItems={handleCartItems} items={cartItems} />
          </main>
        </div>
        <div className="container__cart" id>
          <Cart
            items={cartItems}
            removeCartIcon={removeCartIcon}
            stopScroll={setStopScroll}
            total={total}
          />
        </div>
      </div>
      <div className={stopScroll ? "overlay" : "overlay hidden"}>
        <OrderConfirm
          className="container__order__confirmed"
          items={cartItems}
          total={total}
          resetState={resetState}
        />
      </div>
    </>
  );
}

export default App;

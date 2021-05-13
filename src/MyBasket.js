import { useState } from "react";

export default function MyBasket(props) {
  const [cart, setCart] = useState([
    { name: "Shirt", amount: 1 },
    { name: "Pants", amount: 3 },
    { name: "Socks", amount: 2 },
  ]);

  function addToCart() {
    setCart(nextCart => [
      ...nextCart,
      {
        name: "Shoes",
        amount: 14,
      },
    ]);
  }

  return (
    <section className="MyBasket">
      <p>
        Hello you!! You have {props.basket.length} item
        {props.basket.length == 1 ? "" : "s"} in your basket
        {/* ternary operator */}
      </p>
      <button onClick={addToCart}>Buy More</button>
      <ul>
        {cart.map(item => (
          <CartItem name={item.name} amount={item.amount} key={item.name} />
        ))}
      </ul>
    </section>
  );
}

function CartItem(props) {
  return (
    <li>
      {props.amount} {props.name}
    </li>
  );
}

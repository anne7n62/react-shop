import { useState } from "react";

// Updater function setAmount og original amount
export default function Product(props) {
  const [amount, setAmount] = useState(0);

  function handleClickDown(evt) {
    setAmount((prevState) => {
      return prevState - 1;
    });
  }

  function handleClickUp(evt) {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <section className={props.soldOut ? "Product soldout" : "Product"}>
      <h2>{props.name}</h2>
      <p>ID: {props.id}</p>
      <p>Pris: {props.price} kr.</p>
      <button disabled={amount === 0} onClick={handleClickDown}>
        {" "}
        -{" "}
      </button>{" "}
      {amount}
      <button onClick={() => props.addToBasket(props)}>+</button>
    </section>
  );
}

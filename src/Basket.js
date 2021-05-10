import MyBasket from "./MyBasket";
import Checkout from "./Checkout";

export default function Basket(props) {
  return (
    <aside className="Basket">
      <MyBasket basket={props.basket} />
      <Checkout />
    </aside>
  );
}

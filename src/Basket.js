import MyBasket from "./MyBasket";
import Checkout from "./Checkout";

export default function Basket() {
  return (
    <aside className="Basket">
      <MyBasket />
      <Checkout />
    </aside>
  );
}

import "./App.css";
import Navigation from "./navigation";
import ProductList from "./Productlist";
import Basket from "./Basket";

function App() {
  const product = {
    id: 1163,
    productdisplayname: "Round Neck Jersey",
    price: 895,
    soldOut: true,
  };
  return (
    <div className="App">
      <Navigation />
      <ProductList productdisplayname={product.productdisplayname} price={product.price} soldOut={product.soldOut} />
      <Basket />
    </div>
  );
}

export default App;

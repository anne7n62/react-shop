import Product from "./Product";

export default function ProductList(props) {
  return (
    <main className="Productlist">
      <Product productdisplayname={props.productdisplayname} price={props.price} soldOut={props.soldOut} />
      <Product productdisplayname={props.productdisplayname} price={props.price} />
      <Product productdisplayname={props.productdisplayname} price={props.price} />
      <Product productdisplayname={props.productdisplayname} price={props.price} />
    </main>
  );
}

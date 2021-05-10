import Product from "./Product";

export default function ProductList(props) {
  const productComponents = props.products.map((item) => <Product addToBasket={props.addToBasket} id={item.id} name={item.productdisplayname} price={item.price} key={item.id} />);

  return <main className="Productlist">{productComponents}</main>;
}

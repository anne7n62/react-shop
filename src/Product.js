export default function Product(props) {
  return (
    <section className="product">
      <h2 productdisplayname={props.productdisplayname} price={props.price}>
        {props.productdisplayname}
      </h2>
      <p>{props.price}</p>
    </section>
  );
}

export default function Button(props) {
  return (
    <div
      style={{
        border: "1px solid #000",
        backgroundColor: props.soldOut ? "green" : "red",
      }}
    >
      <button soldOut={props.soldOut}>Click</button>
    </div>
  );
}

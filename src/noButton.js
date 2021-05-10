export default function Button(props) {
  return (
    <div
      style={{
        border: "1px solid #000",
        backgroundColor: props.soldOut ? "green" : "red",
      }}
    >
      <button onClick={(e) => console.log("{props.id}")} soldOut={props.soldOut}>
        Click
      </button>
    </div>
  );
}

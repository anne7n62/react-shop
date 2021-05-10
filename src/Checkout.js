import { useState } from "react";

export default function Checkout() {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [date, setDate] = useState("");

  const nameChanged = (e) => {
    setName(e.target.value);
  };
  const cardChanged = (e) => {
    setName(e.target.value);
  };
  const dateChanged = (e) => {
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // postStuff({
    //   name: name,
    //   card: card,
    //   date: date,
    // });
  };

  return (
    <form className="CheckoutForm" onSubmit={onSubmit}>
      <label>
        name
        <input type="text" onChange={nameChanged} name="name" value={name} />
      </label>

      <label>
        Card no.
        <input type="text" onChange={cardChanged} name="card" value={card} />
      </label>

      <label>
        month/year
        <input type="text" onChange={dateChanged} name="date" value={date} />
      </label>
      <input type="submit" value="send" />
    </form>
  );
}

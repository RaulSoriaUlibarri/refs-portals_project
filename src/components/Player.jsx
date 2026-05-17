import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);

  const newName = useRef();

  function handleClick() {
    setPlayerName(newName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={newName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

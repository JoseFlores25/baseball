import React from "react";

const Player = ({ player }) => {
  const deletePlayer = () => {
    fetch(`http://localhost:9292/players/${player.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

  return (
    <div>
      <h3 class="font-mono text-lg">{player.name}</h3>
      <h3 class="font-mono">{player.position}</h3>
      <button onClick={deletePlayer} class="text-red-700 text-opacity-100 ...">
        DELETE
      </button>
      <br />
      <br />
    </div>
  );
};

export default Player;

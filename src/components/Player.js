import React from "react";

const Player = ({ player, deletePlayer }) => {
  const handleDeletePlayer = async () => {
    const res = await fetch(`http://localhost:9292/players/${player.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res) {
      alert(`Sorry, something went wrong with deleting player ${player?.name}`);
    }
    const resJson = JSON.parse(await res.text());
    deletePlayer(resJson);
  };

  return (
    <div>
      <h3 class="font-mono text-lg">{player.name}</h3>
      <h3 class="font-mono">{player.position}</h3>
      <button
        onClick={handleDeletePlayer}
        class="text-red-700 text-opacity-100 ..."
      >
        DELETE
      </button>
      <br />
      <br />
    </div>
  );
};

export default Player;

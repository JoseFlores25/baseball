import React, { useState, useRef } from "react";

const Player = ({ player, team, deletePlayer, updatePlayer }) => {
  const [position, setPosition] = useState("");
  const ref = useRef(null);
  const handleDeletePlayer = async () => {
    const res = await fetch(
      `http://localhost:9292/players/${player.id}/team/${team.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!res) {
      alert(`Sorry, something went wrong with deleting player ${player?.name}`);
    }
    const resJson = JSON.parse(await res.text());
    deletePlayer(resJson);
  };

  const handleUpdatePlayer = async () => {
    const res = await fetch(
      `http://localhost:9292/players/${player.id}/team/${team.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ position }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!res) {
      alert(`Sorry, something went wrong with deleting player ${player?.name}`);
    }
    const resJson = JSON.parse(await res.text());
    ref.current.blur();
    setPosition("");
    updatePlayer(resJson);
  };

  return (
    <div>
      <h3 class="font-mono text-lg">{player.name}</h3>
      <div>
        <input
          ref={ref}
          placeholder={player.position}
          onChange={(event) => setPosition(event.target.value)}
          value={position}
          class="font-mono"
        />
        <button onClick={handleUpdatePlayer}>Update</button>
      </div>
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

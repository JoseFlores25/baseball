import React from "react";

const Players = ({ players }) => {
  const allPlayers = players.map((p) => <li>{p.name}</li>);

  return <div>{allPlayers}</div>;
};

export default Players;

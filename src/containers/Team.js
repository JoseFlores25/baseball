import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Player from "../components/Player";

const Team = () => {
  const [team, setTeam] = useState({
    players: [],
  });

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/teams/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
      });
  }, []);

  const deletePlayer = (team) => {
    setTeam(team);
  };

  const updatePlayer = (team) => {
    setTeam(team);
  };

  const players = team?.players?.map((p) => (
    <Player
      deletePlayer={deletePlayer}
      updatePlayer={updatePlayer}
      key={p.id}
      player={p}
      team={team}
    />
  ));
  return (
    <div>
      <br />
      <h2 class="font-mono text-5xl">{team.name}</h2>
      <br />
      <h3 class="font-mono text-3xl">Players</h3>
      <hr />
      <br />
      {players}
      <br />
    </div>
  );
};

export default Team;

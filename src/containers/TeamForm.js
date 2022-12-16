import React, { useState } from "react";

export const PlayerList = ({ teams }) => {
  const renderPlayerName = (player) => {
    return player;
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {teams.map((team) => (
          <div>
            <div style={{ margin: 20 }}>{team.name}</div>
            {team.players.map((players) => (
              <div>{players.name}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamForm = () => {
  const [team, setTeam] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTeam(team);
    setTeam({
      name: "",
    });
  };

  const addTeam = (team) => {
    fetch(`http://localhost:9292/teams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: team.name,
      }),
    });
  };

  return (
    <div>
      <br />
      <h3 class="font-mono text-lg">Create Team</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label class="font-mono text-lg">Name:</label>
          <input
            type="text"
            name="name"
            value={team.name}
            onChange={handleChange}
            class="box-border h-5 w-32 p-4 border-2 border-black"
          />
        </div>
        <br />
        <input type="submit" value="Create Team" class="bg-green-400" />
      </form>
      {/* <PlayerList /> */}
    </div>
  );
};

export default TeamForm;

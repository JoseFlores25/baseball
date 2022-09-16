import React, { useState, useEffect } from "react";

const PlayerForm = () => {
  const [teams, setTeams] = useState([]);

  const [player, setPlayer] = useState({
    name: "",
    position: "",
    team_id: null,
  });

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(player);
    setPlayer({
      name: "",
      position: "",
      team: null,
    });
  };

  const addPlayer = (player) => {
    fetch(`http://localhost:9292/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: player.name,
        position: player.position,
        team_id: player.team_id,
      }),
    });
  };

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
      });
  }, []);

  const teamsList = teams.map((t) => <option value={t.id}>{t.name}</option>);

  return (
    <div className="form">
      <h3 class="font-mono text-lg">Create a Player</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label class="font-mono text-lg">Name:</label>
          <input
            type="text"
            name="name"
            value={player.name}
            onChange={handleChange}
            class="box-border h-5 w-32 p-4 border-2 border-black"
          />
        </div>
        <div>
          <label class="font-mono text-lg">Position:</label>
          <input
            type="text"
            name="position"
            value={player.position}
            onChange={handleChange}
            class="box-border h-5 w-32 p-4 border-2 border-black"
          />
        </div>
        <div>
          <label class="font-mono text-lg">Team:</label>
          <select name="team_id" value={player.team_id} onChange={handleChange}>
            <option value="null" disabled selected hidden>
              Select Team
            </option>
            {teamsList}
          </select>
          <br />
        </div>
        <br />
        <input type="submit" value="Create Player" class="bg-green-400" />
      </form>
    </div>
  );
};

export default PlayerForm;

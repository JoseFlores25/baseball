import React, { useState } from "react";

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
    </div>
  );
};

export default TeamForm;

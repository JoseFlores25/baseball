import React, { useState, useEffect } from "react";
import TeamLink from "../components/TeamLink";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
      });
  }, []);

  const teamsList = teams.map((t) => <TeamLink key={t.id} team={t} />);

  return (
    <div>
      <ul>{teamsList}</ul>
    </div>
  );
};

export default Teams;

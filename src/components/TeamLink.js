import React from "react";
import { Link } from "react-router-dom";

const TeamLink = ({ team }) => {
  return (
    <div>
      <Link to={`/teams/${team.id}`}>
        <h3 class="font-mono text-lg">{team.name}</h3>
      </Link>
      <br />
    </div>
  );
};

export default TeamLink;

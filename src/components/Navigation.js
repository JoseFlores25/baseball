import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div class="p-16">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <br />
      <NavLink to="/teams" exact>
        Teams
      </NavLink>
      <br />
      <NavLink to="/players/new" exact>
        Create Player
      </NavLink>
      <br />
      <NavLink to="/teams/new" exact>
        Create Team
      </NavLink>
    </div>
  );
};

export default Navigation;

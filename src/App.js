import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Teams from "./containers/Teams";
import Team from "./containers/Team";
import PlayerForm from "./containers/PlayerForm";
import TeamForm from "./containers/TeamForm";
import Players from "./components/Players";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/players")
      .then((resp) => resp.json())
      .then((players) => setPlayers(players));
  }, []);

  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<Team />} />
          <Route exact path="/players/new" element={<PlayerForm />} />
          <Route exact path="/teams/new" element={<TeamForm />} />
          <Route
            exact
            path="/players"
            element={<Players players={players} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

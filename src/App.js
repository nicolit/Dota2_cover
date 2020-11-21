import React, { useState, useEffect } from "react";
import "./App.css";
import APIHelper from "./APIHelper.js";
import ListUI from "./components/ListUI";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const Background =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blog/play/dota_heroes.png";
const numPlayers = 5;

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  const [heroes, setHeroes] = useState([]);
  const [teamHeroes, setTeamHeroes] = useState({ A: [], B: [] });

  useEffect(() => {
    const fetchHeroes = async () => {
      let heroes = await APIHelper.getHeroes();
      let teamHeroes = APIHelper.splitHeroes(heroes);
      setHeroes(heroes);
      setTeamHeroes(teamHeroes);
    };
    fetchHeroes();
  }, []);

  return (
    <div className="root">

      <div className="title-box">
        <span className="title">Match</span>
      </div>
      <div className="teams">

        <div className="team-pole">
          <ListUI
            items={teamHeroes["A"]}
            team={{ name: "The Dire" }}
          ></ListUI>
        </div>

        <div className="team-pole">
          <ListUI
            items={teamHeroes["B"]}
            team={{ name: "The Radiant" }}
          ></ListUI>
        </div>

      </div>
    </div>
  );
}

export default App;

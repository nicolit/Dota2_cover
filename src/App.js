import React, { useState, useEffect } from "react";
import "./App.css";
import APIHelper from "./APIHelper.js";
import ListUI from "./components/ListUI";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const Background = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blog/play/dota_heroes.png";
const numPlayers = 5;


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",fire
    maxWidth: "360",
    backgroundColor: theme.palette.background.paper,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "inline",
  },
  inline: {
    display: "inline",
  },
  teams: {
    width: "100%",
    maxWidth: "360",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'row',
  }
}));

function App() {
  const classes = useStyles();
  const [heroes, setHeroes] = useState([]);
  const [teamAHeroes, setTeamAHeroes] = useState([]);
  const [teamBHeroes, setTeamBHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      let heroes = await APIHelper.getHeroes();
      heroes = heroes.sort(() => 0.5 - Math.random()); // Shuffle
      setHeroes(heroes);
      const teamAHeroes = heroes.slice(0, numPlayers);
      const teamBHeroes = heroes.slice(5, numPlayers*2);
      setTeamAHeroes(teamAHeroes);
      setTeamBHeroes(teamBHeroes);
    };
    fetchHeroes();
  }, []);


  return (
    <div className="App">
      <img src={ Background } />
      <div className={classes.teams}>
        <ListUI className={classes.root} items={teamAHeroes} team={{name: "The Dire"}}></ListUI>
        <ListUI className={classes.root} items={teamBHeroes} team={{name: "The Radiant"}}></ListUI>
      </div>
    </div>
  );
}

export default App;

import GridListTileBar from "@material-ui/core/GridListTileBar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import "../App.css";

const useStyles = makeStyles((theme) => ({
}));

const Heroe = (props) => {
  const classes = useStyles();
  return (
    <GridListTile key={props.name} className="heroe">
      <img src={props.imgUrl} alt={props.name} />
      <GridListTileBar
        title={props.name}
        subtitle={<span>{props.roles.toString()}</span>}
      />
    </GridListTile>
  );
};

export default Heroe;

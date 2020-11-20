import GridListTileBar from "@material-ui/core/GridListTileBar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Heroe = (props) => {
  const classes = useStyles();
  return (
    <GridListTile key={props.name}>
      <img src={props.imgUrl} alt={props.name} />
      <GridListTileBar
        title={props.name}
        subtitle={<span>{props.roles.toString()}</span>}
      />
    </GridListTile>
  );
};

export default Heroe;

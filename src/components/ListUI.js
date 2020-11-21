import React from "react";
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import Heroe from "./Heroe";
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import "../App.css";

const useStyles = makeStyles((theme) => ({
}));

const ListUI = (props) => {
  const classes = useStyles();

  return (
    <GridList className="heroes">
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} className="team-name-box">
          <div className="team-name"><span>{props.team.name}</span></div>
        </GridListTile>


      {props.items.map((val, idx) => (
        <Heroe
          name={val.name}
          imgUrl={val.imgUrl}
          roles={val.roles}
        />
      ))}
    </GridList>
  );
};

export default ListUI;

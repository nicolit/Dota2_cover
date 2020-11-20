import React from "react";
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import Heroe from "./Heroe";
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const ListUI = (props) => {
  const classes = useStyles();

  return (
    <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">{props.team.name}</ListSubheader>
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

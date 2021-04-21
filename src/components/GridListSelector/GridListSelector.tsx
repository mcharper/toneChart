import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";

import { GridListSelectorProps } from "./GridListSelectorProps";
import { useStyles } from "./GridListSelectorStyles";

export const GridListSelector = ({
  onChange,
}: GridListSelectorProps): JSX.Element => {
  const classes = useStyles();
  const tileData = [
    {
      img: "image1.jpg",
      title: "Dorian",
      subtitle: "Folky sound",
    },
    {
      img: "mountain.jpg",
      title: "Ionian",
      subtitle: "Happy, majestic",
    },
    {
      img: "trees.jpg",
      title: "Pentatonic Minor",
      subtitle: "",
    },
    {
      img: "image1.jpg",
      title: "Other",
      subtitle: "subtitle",
    },
    {
      img: "image1.jpg",
      title: "Other",
      subtitle: "subtitle",
    },
    {
      img: "image1.jpg",
      title: "Other",
      subtitle: "subtitle",
    },
  ];

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Scales</ListSubheader>
        </GridListTile> */}
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={tile.subtitle}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                ></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

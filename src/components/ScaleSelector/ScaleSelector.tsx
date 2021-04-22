import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import { ScaleSelectorProps } from "./ScaleSelectorProps";
import { scales } from "../../models/Scales";
import { Scale } from "../../models/Scale";
import { useStyles } from "./ScaleSelectorStyles";

export const ScaleSelector = ({
  onChange,
}: ScaleSelectorProps): JSX.Element => {
  const classes = useStyles();

  return (
    <GridList className={classes.root}>
      {scales.map((scale: Scale) => (
        <GridListTile
          key={scale.id}
          onClick={() => onChange(scale)}
          className={classes.tile}
        >
          <img src={scale.image} alt={scale.image} />
          <GridListTileBar title={scale.name} subtitle={scale.description} />
        </GridListTile>
      ))}
    </GridList>
  );
};

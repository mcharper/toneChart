import { Grid } from "@material-ui/core";

import { SwatchPaletteProps } from "./SwatchPaletteProps";
import { useStyles } from "./SwatchStyles";

export const SwatchPalette = ({ palette }: SwatchPaletteProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {palette.map((swatch) => {
        return (
          <Grid
            item
            className={classes.swatchPiece}
            style={{
              backgroundColor: swatch.colour,
            }}
          >
            <span>{swatch.label}</span>
          </Grid>
        );
      })}
    </Grid>
  );
};

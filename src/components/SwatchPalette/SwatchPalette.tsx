import { Grid } from "@material-ui/core";
import React from "react";
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
            style={{ backgroundColor: swatch.colour }}
          >
            {swatch.label}
          </Grid>
        );
      })}
    </Grid>
    // <table className={classes.root}>
    //   <tr>
    //     <td colSpan={palette.length}></td>
    //   </tr>
    //   <tr>
    //     {palette.map((swatch) => {
    //       return (
    //         <td
    //           className={classes.swatchPiece}
    //           style={{ backgroundColor: swatch.colour }}
    //         >
    //           {swatch.label}
    //         </td>
    //       );
    //     })}
    //   </tr>
    // </table>
  );
};

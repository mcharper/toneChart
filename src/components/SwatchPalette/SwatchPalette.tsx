import { SwatchPaletteProps } from "./SwatchPaletteProps";
import { useStyles } from "./SwatchStyles";

export const SwatchPalette = ({ palette }: SwatchPaletteProps): JSX.Element => {
  const classes = useStyles();

  return (
    <table className={classes.root}>
      <tr>
        <td colSpan={palette.length}></td>
      </tr>
      <tr>
        {palette.map((swatch) => {
          return (
            <td
              className={classes.swatchPiece}
              style={{ backgroundColor: swatch.colour }}
            >
              {swatch.label}
            </td>
          );
        })}
      </tr>
    </table>
  );
};
